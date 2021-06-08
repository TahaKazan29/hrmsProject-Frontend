import axios from "axios";

export default class WayOfWorkingService {

    getWorking(){
        return axios.get("http://localhost:8080/api/waysofworking/getall");
    }

} 
