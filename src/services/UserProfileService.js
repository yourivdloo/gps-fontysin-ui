import axios from 'axios';

const REST_API_URL = "http://127.0.0.1:8080/";

class UserProfileService{

    findAll(){
        return axios.get(REST_API_URL + "users"); // returns UserProfile list
    }

    findByPcn(pcn){
        return axios.get(REST_API_URL + "user/" + pcn); // returns UserProfile
    }

    addNewProfile(userProfile){
        return axios.post(REST_API_URL + "user", userProfile); // returns string
    }

    updateProfile(userProfile){
        return axios.put(REST_API_URL + "user", userProfile); // retruns string
    }
}

export default new UserProfileService();