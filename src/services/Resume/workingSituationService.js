import axios from "axios";

export default class WorkingSituationService {

    async getWorkingSituations(){
        return await axios.get("http://localhost:8080/api/workingSituations/getall");
    }

} 