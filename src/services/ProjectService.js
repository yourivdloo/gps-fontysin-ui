import axios from 'axios';
import baseUrl, {getHeader} from "./../globals/globalVariables"

const PROJECT_BASE_URL = baseUrl + "/api/project/";

class ProjectService{
    
    async findUserProjects(userPcn = 0){
        var headers = getHeader();
        var obj = []

        return await axios.get(PROJECT_BASE_URL +  userPcn, {headers: headers})
        .then(response =>{
            var obj = response.data;
            // console.log(obj);
            return obj;
        }).catch(err =>{
            console.log(err);
            return obj;
        });
    }
    
    async findMyProjects(){
        var headers = getHeader();
        var obj = []

        return await axios.get(PROJECT_BASE_URL, {headers: headers})
        .then(response =>{
            var obj = response.data;
            // console.log(obj);
            return obj;
        }).catch(err =>{
            console.log(err);
            return obj;
        });
    }

    async CreateProjects(projects = []){
        var header = getHeader();
        console.log(header)
        
        await axios.post(PROJECT_BASE_URL + "new/list", projects, {headers: header})
        .then(response => {
            console.log(response);
        }).catch(err =>{
            console.log(err);
        });
    }
}

export default new ProjectService();