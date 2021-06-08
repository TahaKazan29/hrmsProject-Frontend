import React from "react";
import { Link } from "react-router-dom";
import IndexNavbar from "../layouts/Navbars/IndexNavbar.jsx";
import Footer from "../layouts/Footer/Footer.jsx";
import JobPosition from "./JobPosition.jsx";
import City from "./City.jsx";
import WayOfWorking from "./WayOfWorking.jsx";

export default function JobPosting(props) {
  
  function fragmantaion(params) {
    let description = params.slice(0,230);
    return description + "...";
  }  

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
                    İş ilanlarımızı inceleyin
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Anlamlı ve yapmaya değer bir iş bulmanın uzun bir yolculuk
                    olduğunu biliyoruz. Hedefimiz bu işlemi sizin için mümkün
                    olduğu kadar kolaylaştırmak ve her gün gitmeye can
                    attığınız, tatmin edici bir iş ortamı yaratmak. Varolan
                    işlere göz atarak yolculuğunuza bizimle başlayın.
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
                <City/>
                <JobPosition/> 
                <WayOfWorking/>
              </div>
              <div className="md:w-8/12 pt-14">
              {props.posts.map((post) => (
                      <Link to={"jobPost/" + post.id}
                      key={post.id} onClick={() => props.changePost(post)} >

                <div
                  className="pt-2 hover:shadow-lg"
                >
                  <div className="relative min-w-0 break-words bg-white shadow-lg">
                    
                    <div className="px-4 py-5 flex-auto">
                      <div className="flex flex-wrap">
                        <h6 className="text-lg font-semibold flex-1">
                          {post.positionName}
                        </h6>
                        <div className="flex flex-wrap bg-gray-400 w-40 rounded ml-2 px-10 py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                            <p className="pl-1 text-sm text-center text-white font-bold">{post.cityName}</p>
                        </div>
                      </div>
                      <p className="mt-2 mb-4 text-sm text-blueGray-500">
                        {fragmantaion(post.description)}
                      </p>
                      <p className="mt-2 mb-1 text-xs font-bold text-right text-blueGray-500">
                        Yayın Tarihi
                      </p>
                      <p className="mt-2 mb-1 text-xs font-bold text-right text-blueGray-500">
                        {post.releaseDate}
                      </p>
                      <div className="flex flex-wrap">
                      <div className="flex flex-wrap border-2 border-blueGray-300 pr-1 pl-1 rounded">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="green">
                          <path strokeLinejoin="round"  strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <p className="pl-1 text-sm text-right text-blueGray-500 font-bold">{post.positionCount}</p>
                      </div>
                      <div className="flex flex-wrap border-2 border-blueGray-300 pr-1 rounded ml-2">
                          <p className="pl-1 text-sm text-right text-blueGray-500 font-bold">{post.wayOfWorking}</p>
                      </div>
                      </div>
                     
                    </div>
                  </div>
                </div>
                </Link>
              ))}
             </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
