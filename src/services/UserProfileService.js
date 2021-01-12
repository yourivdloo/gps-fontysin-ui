import axios from 'axios';
import baseUrl from "./../globals/globalVariables"

const USER_BASE_URL = baseUrl + "/api/user";
const PROPERTY_BASE_URL = baseUrl + "/api/property";
const pcn= 438161;

class UserProfileService{
    findAll(){
        return axios.get(USER_BASE_URL + "/all"); // returns UserProfile list
    }

    findByPcn(pcn){
        return axios.get(USER_BASE_URL + "/" + pcn); // returns UserProfile
    }

    async searchByName(name){
        var headers = this.getHeader();

        var obj;

        await axios.get(USER_BASE_URL + "/search/" + name, {headers: headers})
        .then(response => {
            console.log(response.data);
            obj = response.data
            console.log(obj);
            return obj;
        }).catch((e)=>{
            obj = [];
            console.log(obj);
        })

        return obj;
    }

    async existsByPcn(userPcn){
        var headers = this.getHeader();

        await axios.get(USER_BASE_URL + "/" + userPcn, { headers: headers })
        .then(response => {
            localStorage.setItem('pcn', userPcn);
        })
        .catch((e) => {
            localStorage.clear();
        });
    }

    addNewProfile(userProfile){
        var headers = this.getHeader();

        return axios.post(USER_BASE_URL + "/new", userProfile, { headers: headers })
        .then(response => {
            localStorage.setItem('pcn', userProfile.pcn);
        })
    }

    async updateProperties(userProperties){
        var headers = this.getHeader();

        return await axios.put(PROPERTY_BASE_URL + "/update", userProperties, { headers: headers }); 
    }

    async deleteProperties(deletedItems){
        var headers = this.getHeader();

        return await axios.delete(PROPERTY_BASE_URL + "/delete", { headers: headers , data: deletedItems});
    }

    updateSettings(userProfile){
        var headers = this.getHeader();

        return axios.put(USER_BASE_URL + "/" + userProfile.pcn, userProfile, { headers: headers });
    }

    getHeader(){
        var header = "";

        if(baseUrl === "http://localhost:8080"){
            header = {
                'x-ms-client-principal-name': pcn + '@student.fontys.nl'
            }
        }

        return header;
    }
}

export default new UserProfileService();