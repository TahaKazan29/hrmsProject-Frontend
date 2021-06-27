import axios from "axios";

export default class UniversityService {

    async getUniversities(){
        return await axios.get("http://localhost:8080/api/universities/getall");
    }

} 


