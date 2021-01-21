import axios from 'axios';
import baseUrl, {getHeader} from "./../globals/globalVariables"

const USER_BASE_URL = baseUrl + "/api/user";
const PROPERTY_BASE_URL = baseUrl + "/api/property";

class UserProfileService{
    findAll(){
        return axios.get(USER_BASE_URL + "/all"); // returns UserProfile list
    }
    
    async findByPcn(userPcn){
        var obj;
        await axios.get(USER_BASE_URL + "/" + userPcn).then(response =>{
            obj = response.data
            console.log(obj) 
        }).catch((e)=>{
            obj = null;
            console.log(e)
        }); // returns UserProfile

        return obj
    }

    async searchByName(name){
        var headers = getHeader();

        var obj;

        return await axios.get(USER_BASE_URL + "/search/" + name, {headers: headers})
        .then(response => {
            console.log(response.data);
            var obj = response.data;
            console.log(obj);
            return obj;
        }).catch((e)=>{
            obj = [];
            console.log(obj);
        })
    }

    async whoAmI(){
        var headers = getHeader();

        return await axios.get(USER_BASE_URL + "/", { headers: headers })
        .then(response => {
            if(response.data.pcn == undefined){
                return null
            }
            localStorage.setItem('pcn', response.data.pcn);

            return response.data;
        })
        .catch((e) => {
            localStorage.clear();
            return null;
        });
    }

    async existsByPcn(userPcn){
        var headers = getHeader(userPcn);

        await axios.get(USER_BASE_URL + "/" + userPcn, { headers: headers })
        .then(response => {
            localStorage.setItem('pcn', userPcn);
        })
        .catch((e) => {
            localStorage.clear();
        });
    }

    addNewProfile(userProfile){
        var headers = getHeader();

        return axios.post(USER_BASE_URL + "/new", userProfile, { headers: headers })
        .then(response => {
            localStorage.setItem('pcn', userProfile.pcn);
        })
    }

    async updateProperties(userProperties){
        var headers = getHeader();

        return await axios.put(PROPERTY_BASE_URL + "/update", userProperties, { headers: headers }); 
    }

    async deleteProperties(deletedItems){
        var headers = getHeader();

        return await axios.delete(PROPERTY_BASE_URL + "/delete", { headers: headers , data: deletedItems});
    }

    async updateSettings(userProfile){
        var headers = getHeader();

        return await axios.put(USER_BASE_URL + "/" + userProfile.pcn, userProfile, { headers: headers });
    }

}

export default new UserProfileService();