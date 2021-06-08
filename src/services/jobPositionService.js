import axios from "axios";

export default class JobPositionService {

    getPositions(){
        return axios.get("http://localhost:8080/api/jobpositions/getall");
    }

} 
