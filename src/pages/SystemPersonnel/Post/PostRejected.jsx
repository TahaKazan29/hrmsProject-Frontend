import React from 'react'
import {checkStatus,checkStatusColor} from '../StatusControl'
import { useEffect } from "react";
import FooterSystemPersonnel from '../../../layouts/Footers/FooterSystemPersonnel';
import SystemPersonnelNavbar from '../../../layouts/Navbars/SystemPersonnelNavbar';
import HeaderPost from '../../../layouts/Headers/HeaderPost';
import PostDropdown from '../../../layouts/Dropdowns/PostDropdown'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getPostsRejected } from '../../../store/actions/postActions';

export default function PostRejected() {

  const dispatch = useDispatch();
  const {postsRejected} = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(getPostsRejected())
  },[])

  const postsList = postsRejected.length ? (
    postsRejected.map((post) => (
      <tr key={post.id}>
          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{post.companyName}</th>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{post.positionName}</td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{post.cityName}</td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{post.releaseDate}</td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><i className={"fas fa-circle mr-2 "+(checkStatusColor(post.status))}></i>{checkStatus(post.status)}</td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
            <PostDropdown postStatu={post.status} postId={post.id}/>
          </td>
      </tr>
  ))
  ) : (
    <tr>
      <th> Listelenecek İlan Bulunamadı !</th>
    </tr>
  )

    return (
        <div>
            <>
            <div className="relative md:ml-64 bg-blueGray-100">
              <SystemPersonnelNavbar/>
              <HeaderPost />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                <div className="relative flex flex-col min-w-0 break-words bg-lightBlue-900 text-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-lg text-white">
                Reddedilen İlanlar
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-dark border-collapse">
            <thead>
                <tr>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">
                        ŞİRKET
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">
                        POZİSYON
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">
                        ŞEHİR
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">
                        YAYIN TARİHİ
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">
                        DURUMU
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"></th>
                </tr>
            </thead>
            <tbody>
               {postsList}
            </tbody>
          </table>
        </div>
      </div>
      <FooterSystemPersonnel/>
            </div>
        </div>
    </>
        </div>
    )
}
