import axios from "axios";

export default class EmployerService {

    async getAll(){
        return await axios.get("http://localhost:8080/api/employers/getall");
    }

    async getAllUpdateProfile(){
        return await axios.get("http://localhost:8080/api/employers/getAllUpdateProfile");
    }

    async updateProfile(employer){
        return await axios.put("http://localhost:8080/api/employers/updateProfile",employer);
    }

    async update(employer){
        return await axios.put("http://localhost:8080/api/employers/update",employer);
    }

    async update(employer){
        return await axios.put("http://localhost:8080/api/employers/update",employer);
    }

    async getById(employerId){
        return await axios.get("http://localhost:8080/api/employers/getById?id="+employerId);
    }

    async getAllActives(){
        return await axios.get("http://localhost:8080/api/employers/getAllActives");
    }

    async getAllPassive(){
        return await axios.get("http://localhost:8080/api/employers/getAllPassive");
    }

    async getAllWaitingApproval(){
        return await axios.get("http://localhost:8080/api/employers/getAllWaitingApproval");
    }

    async getAllRejected(){
        return await axios.get("http://localhost:8080/api/employers/getAllRejected");
    }

    async passivePost(postId){
        return await axios.post("http://localhost:8080/api/employers/passivePost?postId=" +postId);
    }

} 
