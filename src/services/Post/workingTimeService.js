import axios from "axios";

export default class WorkingTimeService {

    getWorkingTimes(){
        return axios.get("http://localhost:8080/api/workingstime/getall");
    }

} 
