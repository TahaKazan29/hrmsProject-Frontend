import axios from "axios";

export default class EducationLevelService {

    async getEducationLevels(){
        return await axios.get("http://localhost:8080/api/educationLevels/getall");
    }

} 


