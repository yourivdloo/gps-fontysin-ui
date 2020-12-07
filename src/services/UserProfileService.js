import axios from 'axios';

const REST_API_URL = "http://localhost:8080/api/user";

class UserProfileService{

    findAll(){
        return axios.get(REST_API_URL + "/all"); // returns UserProfile list
    }

    findByPcn(pcn){
        return axios.get(REST_API_URL + "/" + pcn); // returns UserProfile
    }

    addNewProfile(userProfile){
        var headers = {
            'x-ms-client-principal-name': userProfile.pcn + '@student.fontys.nl'
        }

        return axios.post(REST_API_URL + "/new", userProfile, { headers: headers }); // returns string
    }

    updateProfile(userProfile){
        return axios.put(REST_API_URL, userProfile); // retruns string
    }
}

export default new UserProfileService();