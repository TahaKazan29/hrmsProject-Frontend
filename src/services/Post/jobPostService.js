import axios from "axios";

export default class JobPostService {

    async getPosts(){
        return await axios.get("http://localhost:8080/api/posts/getAllActivesByDate");
    }

    async getByPostDetail(postId){
        return await axios.get("http://localhost:8080/api/posts/getByPostDetail?postId=" + postId);
    }

    async add(value){
        return await axios.post("http://localhost:8080/api/posts/add",value);
    }

    async getAll(){
        return await axios.get("http://localhost:8080/api/posts/getall");
    }

    async getAllIsWaitingApproval(){
        return await axios.get("http://localhost:8080/api/posts/getAllIsWaitingApproval");
    }

    async getAllIsActive(){
        return await axios.get("http://localhost:8080/api/posts/getAllIsActive");
    }

    async getAllIsPassive(){
        return await axios.get("http://localhost:8080/api/posts/getAllIsPassive");
    }

    async getAllIsExpired(){
        return await axios.get("http://localhost:8080/api/posts/getAllIsExpired");
    }

    async getAllIsRejected(){
        return await axios.get("http://localhost:8080/api/posts/getAllIsRejected");
    }

    async getFilter(filter,pageNumber){
        return await axios.post("http://localhost:8080/api/posts/getFilter?pageNumber="+pageNumber,filter);
    }

} 
