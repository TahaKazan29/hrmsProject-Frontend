import axios from "axios";

export default class SectionService {

    async getSections(faculityId,uniId){
        return await axios.get("http://localhost:8080/api/sections/getByFaculity?faculityId=" + faculityId + "&uniId=" + uniId);
    }

} 


