import axios from "axios";

export default class JobPostService {

    getPosts(){
        return axios.get("http://localhost:8080/api/posts/getAllActivesByDate");
    }

    getPostById(postId){
        return axios.get("http://localhost:8080/api/posts/getActivesByDate?postId=" + postId);
    }

} 
