import axios from "axios";

export default class FavoritePostService {

    async getAll(){
        return await axios.get("http://localhost:8080/api/favoritePosts/getall");
    }

    async add(favoritePostDto){
        return await axios.post("http://localhost:8080/api/favoritePosts/add",favoritePostDto);
    }

    async delete(id){
        return await axios.post("http://localhost:8080/api/favoritePosts/delete?id="+id);
    }

}

