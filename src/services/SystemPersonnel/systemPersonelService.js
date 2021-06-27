import axios from "axios";

export default class SystemPersonnelService {

    async getById(id){
        return await axios.get("http://localhost:8080/api/systempersonnels/getById?id=" + id);
    }

    async update(personnel){
        return await axios.put("http://localhost:8080/api/systempersonnels/update",personnel);
    }

    async updateEmployerProfileAccept(employerId){
        return await axios.post("http://localhost:8080/api/systempersonnels/employerProfileUpdateAccept?employerId=" + employerId);
    }

    async updateEmployerProfileReject(employerId){
        return await axios.post("http://localhost:8080/api/systempersonnels/employerProfileUpdateRejectemployerId=" + employerId);
    }

    async activatePost(postId){
        return await axios.post("http://localhost:8080/api/systempersonnels/activePost?postId=" + postId);
    }

    async passivePost(postId){
        return await axios.post("http://localhost:8080/api/systempersonnels/passivePost?postId=" + postId);
    }

    async rejectPost(postId){
        return await axios.post("http://localhost:8080/api/systempersonnels/rejectPost?postId=" + postId);
    }

    async activateEmployer(employerId){
        return await axios.post("http://localhost:8080/api/systempersonnels/activeEmployer?employerId=" + employerId);
    }

    async passiveEmployer(employerId){
        return await axios.post("http://localhost:8080/api/systempersonnels/passiveEmployer?employerId=" + employerId);
    }

    async rejectEmployer(employerId){
        return await axios.post("http://localhost:8080/api/systempersonnels/rejectEmployer?employerId=" + employerId);
    }

}