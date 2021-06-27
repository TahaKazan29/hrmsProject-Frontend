import axios from "axios";

export default class MaritalStatusService {

    async getMaritalStatus(){
        return await axios.get("http://localhost:8080/api/maritalStatus/getall");
    }

} 