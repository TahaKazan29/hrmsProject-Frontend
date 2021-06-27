import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import FooterSystemPersonnel from "../../../layouts/Footers/FooterSystemPersonnel";
import SystemPersonnelNavbar from "../../../layouts/Navbars/SystemPersonnelNavbar";
import JobPostService from "../../../services/Post/jobPostService";
import { getPostByDetail } from "../../../store/actions/postActions";
import PostOperations from '../PostOperation'

export default function PostDetail() {
    let {postId} = useParams();

    const {post} = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
      dispatch(getPostByDetail(postId))
    },[])

    return (
      <>
      <div className="relative md:ml-64 bg-blueGray-100">
              <SystemPersonnelNavbar/>
              <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <button onClick={() => history.goBack()}
              className="bg-blueGray-600 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              <i class="fas fa-arrow-circle-left fa-lg"></i> GERİ DÖN
            </button>
        </div>
      </div>
                <div className="px-4 md:px-10 mx-auto w-full -m-32">
                <div className="flex flex-wrap mt-20 justify-center">
    <div className="w-full lg:w-8/12 px-4">
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-gray-400 mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-white text-xl font-bold">{post.positionName}</h6>
            <div className="flex flex-wrap">
                <PostOperations statu={post.status} postId={postId}/>
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
    <FooterSystemPersonnel/>
    </div>
    </div>
    </>
  );
}
