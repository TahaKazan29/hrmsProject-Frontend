import axios from "axios";

export default class EmployerProfileUpdateService {

    async getAll(){
        return await axios.get("http://localhost:8080/api/employerProfileUpdates/getall");
    }

}