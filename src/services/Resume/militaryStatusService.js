import axios from "axios";

export default class MilitaryStatusService {

    async getMilitaryStatus(){
        return await axios.get("http://localhost:8080/api/militaryStatus/getall");
    }

} 