import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IndexNavbar from "../../layouts/Navbars/IndexNavbar.jsx";
import Footer from "../../layouts/Footers/Footer.jsx";
import JobPosition from "../../layouts/Post/JobPosition.jsx";
import City from "../../layouts/Post/City.jsx";
import WayOfWorking from "../../layouts/Post/WayOfWorking.jsx";
import WorkingTime from "../../layouts/Post/WorkingTime.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getPostsFilter } from "../../store/actions/postActions.js";
import Pagination from "react-js-pagination";

export default function JobPosting() {
  const dispatch = useDispatch();
  const { postsFilter } = useSelector((state) => state.posts);
  const { filterElements } = useSelector((state) => state.posts);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    dispatch(getPostsFilter(filterElements,activePage));
  }, [activePage]);

  function fragmantaion(params) {
    let description = params.slice(0, 230);
    return params.length > 230 ? description + "..." : description;
  }

  const getFilter = () => {
    dispatch(getPostsFilter(filterElements,activePage));
  };

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };

  const postList = postsFilter.length ? (
    postsFilter.map((post) => (
      <Link to={"jobPost/" + post.id} key={post.id}>
        <div className="pt-2 hover:shadow-lg">
          <div className="relative min-w-0 break-words bg-white shadow-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="flex flex-wrap">
                <h6 className="text-lg font-semibold flex-1">
                  {post.positionName}
                </h6>
                <div className="flex flex-wrap bg-gray-400 w-40 rounded ml-2 px-10 py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="pl-1 text-sm text-center text-white font-bold">
                    {post.cityName}
                  </p>
                </div>
              </div>
              <p className="mt-2 mb-4 text-sm text-blueGray-500">
                {fragmantaion(post.description)}
              </p>
              <p className="mt-2 mb-1 text-xs font-bold text-right text-blueGray-500">
                Yay??n Tarihi
              </p>
              <p className="mt-2 mb-1 text-xs font-bold text-right text-blueGray-500">
                {post.releaseDate}
              </p>
              <div className="flex flex-wrap">
                <div className="flex flex-wrap border-2 border-blueGray-300 pr-1 pl-1 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="green"
                  >
                    <path
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <p className="pl-1 text-sm text-right text-blueGray-500 font-bold">
                    {post.positionCount}
                  </p>
                </div>
                <div className="flex flex-wrap border-2 border-blueGray-300 pr-1 rounded ml-2">
                  <p className="pl-1 text-sm text-right text-blueGray-500 font-bold">
                    {post.wayOfWorking}
                  </p>
                </div>
                <div className="flex flex-wrap border-2 border-blueGray-300 pr-1 rounded ml-2">
                  <p className="pl-1 text-sm text-right text-blueGray-500 font-bold">
                    {post.workingTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    ))
  ) : (
    <p className="text-center text-xl font-bold">
      {" "}
      Listelenecek ??lan Bulunamad?? !
    </p>
  );

  return (
    <>
      <IndexNavbar fixed />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    ???? ilanlar??m??z?? inceleyin
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Anlaml?? ve yapmaya de??er bir i?? bulman??n uzun bir yolculuk
                    oldu??unu biliyoruz. Hedefimiz bu i??lemi sizin i??in m??mk??n
                    oldu??u kadar kolayla??t??rmak ve her g??n gitmeye can
                    att??????n??z, tatmin edici bir i?? ortam?? yaratmak. Varolan
                    i??lere g??z atarak yolculu??unuza bizimle ba??lay??n.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-4/12 px-12">
                <City />
                <JobPosition />
                <WayOfWorking />
                <WorkingTime />
                <div className="sticky bottom-1">
                  <button
                    className="w-full bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => getFilter()}
                  >
                    <i className="fas fa-search pr-1"></i> Ara
                  </button>
                </div>
              </div>
              <div className="md:w-8/12 pt-14">
                 {postList}
                 <div className="py-2 mt-2 px-2">
                <nav className="block flex justify-end	">
                  <Pagination
                    firstPageText="????"
                    lastPageText="????"
                    prevPageText="????"
                    nextPageText="????"
                    activePage={activePage}
                    // itemsCountPerPage={2}
                    totalItemsCount={350}
                    pageRangeDisplayed={postList.length}
                    linkClass="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500"
                    innerClass="flex pl-0 rounded list-none flex-wrap"
                    activeClass="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500"
                    itemClass=""
                    onChange={handlePageChange.bind(this)}
                  ></Pagination>
                </nav>
              </div>
              </div>
              
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
