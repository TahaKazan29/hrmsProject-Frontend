import axios from "axios";

export default class JobSeekerService {

    async getAll(){
        return await axios.get("http://localhost:8080/api/jobseekers/getall");
    }


} 
