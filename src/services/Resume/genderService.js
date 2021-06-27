import axios from "axios";

export default class GenderService {

    async getGenders(){
        return await axios.get("http://localhost:8080/api/genders/getall");
    }

} 


