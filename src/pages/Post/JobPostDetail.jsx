import React, { useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import Footer from "../../layouts/Footers/Footer";
import Navbar from "../../layouts/Navbars/IndexNavbar";
import { FavoritePostDto } from "../../Model/favoritePostDto";
import JobPostService from "../../services/Post/jobPostService";
import { addFavoritePost } from "../../store/actions/userAction";

export default function JobPostDetail() {

    let {postId} = useParams();

    const [post, setPost] = useState({});
    const dispatch = useDispatch();

    useEffect(()=> {
      let postService = new JobPostService();
      postService.getByPostDetail(postId).then(result => setPost(result.data.data))
    },[])

    let favoritePostDto = new FavoritePostDto(postId,1);

    const addFavorite = () => {
      dispatch(addFavoritePost(favoritePostDto))
      console.log(favoritePostDto);
    }


  return (
      <>
      <Navbar/>
    <div className="flex flex-wrap mt-20 justify-center">
    <div className="w-full lg:w-8/12 px-4">
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-lightBlue-500 mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-white text-xl font-bold">{post.positionName}</h6>
            <div className="flex flex-wrap">
            <button
              className="bg-emerald-500 text-white active:bg-emerald-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => addFavorite()}
            >
              Favorilere Ekle
            </button>
            <button
              className="bg-red-700 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Başvuru yap
            </button>
            </div>
            
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Şirket Bilgileri
            </h6>
            <div className="flex flex-wrap">
                {post.companyName}
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              İş Tanımı
            </h6>
            <div className="flex flex-wrap">
                {post.description}             
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Şehir
            </h6>
            <div className="flex flex-wrap">
                {post.cityName}             
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Pozisyon Sayısı
            </h6>
            <div className="flex flex-wrap">
                {post.positionCount}             
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Son başvuru tarihi
            </h6>
            <div className="flex flex-wrap">
                {post.lastApplyDate}             
            </div>
        </div>
      </div>
    </div>
    </div>
    <div className="mt-20">
      <Footer/>
    </div>
    </>
  );
}
