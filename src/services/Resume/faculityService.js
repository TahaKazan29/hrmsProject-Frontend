import axios from "axios";

export default class FaculityService {

    async getFaculities(uniId){
        return await axios.get("http://localhost:8080/api/faculities/getByUniversity?id="+ uniId);
    }

} 


