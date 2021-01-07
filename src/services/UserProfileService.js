import axios from 'axios';

const REST_API_URL = "http://localhost:8080/api/user";

class UserProfileService{
    findAll(){
        return axios.get(REST_API_URL + "/all"); // returns UserProfile list
    }

    findByPcn(pcn){
        return axios.get(REST_API_URL + "/" + pcn); // returns UserProfile
    }

    async existsByPcn(userPcn){
        var headers = {
            'x-ms-client-principal-name': userPcn + '@student.fontys.nl'
        }

        await axios.get(REST_API_URL + "/" + userPcn, { headers: headers })
        .then(response => {
            localStorage.setItem('pcn', userPcn);
        })
        .catch((e) => {
            localStorage.clear();
        });
    }

    addNewProfile(userProfile){
        var headers = {
            'x-ms-client-principal-name': userProfile.pcn + '@student.fontys.nl'
        } 

        return axios.post(REST_API_URL + "/new", userProfile, { headers: headers })
        .then(response => {
            localStorage.setItem('pcn', userProfile.pcn);
        })
    }

    updateProfile(userProfile){
        var headers = {
            'x-ms-client-principal-name': userProfile.pcn + '@student.fontys.nl'
        } 

        return axios.put(REST_API_URL + "/" + userProfile.pcn + "/props", userProfile, { headers: headers }); // retruns string
    }

    updateSettings(userProfile){
        var headers = {
            'x-ms-client-principal-name': userProfile.pcn + '@student.fontys.nl'
        } 

        return axios.put(REST_API_URL + "/" + userProfile.pcn, userProfile, { headers: headers }); // retruns string
    }
}

export default new UserProfileService();