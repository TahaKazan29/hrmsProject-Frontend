import React from "react";
import { Link, useHistory } from "react-router-dom";
import IndexNavbar from "../layouts/Navbars/IndexNavbar.jsx";
import Footer from "../layouts/Footer/Footer.jsx";

export default function JobPosting(props) {
  
  function fragmantaion(params) {
    let description = params.slice(0,130);
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
              {props.posts.map((post) => (
                <div
                  key={post.id}
                  className="lg:pt-12 pt-6 w-full md:w-4/12 px-4"
                >
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg ">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-center">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400 text-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                      </div>

                      <h6 className="text-xl font-semibold text-center">
                        {post.positionName}
                      </h6>
                      <p className="mt-2 mb-4 text-blueGray-500 text-center">
                        {fragmantaion(post.description)}
                      </p>
                      <p className="mt-2 mb-1 text-xs font-bold text-right">
                        Son başvuru tarihi
                      </p>
                      <p className="mt-2 mb-1 text-xs font-bold text-right">
                        {post.lastApplyDate}
                      </p>
                      <Link to={"jobPost/" + post.id} >
                      <div className="flex">
                        <button
                          onClick={() => props.changePost(post)}
                          className="flex-1 mt-3 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                          type="button"
                        >
                          Görüntüle
                        </button>
                      </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
