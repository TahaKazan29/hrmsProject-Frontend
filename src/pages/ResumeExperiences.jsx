import React, { useState } from 'react'
import Navbar from '../layouts/Navbars/IndexNavbar'

export default function ResumeExperiences() {

    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    function handleClick(value) {
        console.log(value);
    }


    return (
        <div>
            <Navbar/>
            <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 pb-20">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-10/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Deneyimler
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <i className="fas fa-user text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Kişisel
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Kişisel Bilgilerinizi Giriniz
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <i className="fas fa-address-book text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Deneyimler
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Daha Önceki Deneyimlerinizi CV'nizde Bulundurunuz
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-8/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Deneyimler</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              EĞİTİM
            </h6>

            <div className="px-4 ">
                {/* <div className="flex flex-wrap relative w-40 mx-auto justify-center mb-8">
                        <img
                        alt="..."
                        src={require("../assets/img/team-3-800x800.jpg").default}
                        className="shadow-lg rounded-full max-w-120-px"
                    />
                        <button className="bg-purple-500 mt-4 text-white active:bg-pruple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                            Fotoğraf Yükle
                        </button>
                </div> */}
                <div className="flex flex-wrap lg:w-12/12 ">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    LİSE ADI
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    LİSE BÖLÜMÜ
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
            
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    BAŞLANGIÇ TARİHİ
                  </label>
                  <input
                    type="date"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    MEZUNİYET TARİHİ
                  </label>
                  <input
                    id="lise"
                    disabled={isChecked}
                    type="date"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
                <div>
                    <label className="inline-flex items-center cursor-pointer" >
                        <input
                            id="customCheckGraduated"
                            type="checkbox"
                            onChange={handleOnChange}
                            className="form-checkbox rounded text-blueGray-700 ml-1 mr-3 border-blueGray-400 w-4 h-4 ease-linear transition-all duration-150"
                        />
                        <p className="text-blueGray-500 text-sm leading-relaxed">
                            Mezun Değilim
                        </p>
                    </label>
                </div>
              </div>
              
              {/* university 1 start*/}
              <div className="flex flex-wrap">
                <h6 className="w-full text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    ÜNİVERSİTE
                </h6>
                <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    ÜNİVERSİTE ADI
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    ÜNİVERSİTE BÖLÜMÜ
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    EĞİTİM SEVİTESİ
                  </label>
                  <input
                    type="text"
                    placeholder="Lisans - Ön Lisans - Yüksek Lisans - Doktora"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    MEZUNİYET TARİHİ
                  </label>
                  <input
                    type="date"
                    id="university1"
                    // disabled={isChecked}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
                <div>
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            id="deneme"
                            onClick={() => handleClick('deneme')}
                            type="checkbox"
                            className="form-checkbox rounded text-blueGray-700 ml-1 mr-3 border-blueGray-400 w-4 h-4 ease-linear transition-all duration-150"
                        />
                        <p className="text-blueGray-500 text-sm leading-relaxed">
                            Mezun Değilim
                        </p>
                    </label>
                </div>
              </div>

              </div>
            {/* university 1  end*/}
              
              

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                <button className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Üniversite Ekle
                </button>
                </div>
              </div>

            </div>
                {/* <div className="w-full lg:w-12  /12 px-4 mt-5">
                <div className="relative mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Açık Adres
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div> */}
              {/* <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 mt-5">
                <div className="relative mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Github Adresiniz
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4 mt-5">
                <div className="relative mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Linkedin Adresiniz
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>

           
            </div> */}
            <hr className="mt-6 border-b-1 border-blueGray-300" />
            <div className="flex flex-wrap justify-end">
            <button className="bg-emerald-500 mt-4 text-white active:bg-emerald-600 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                Kaydet ve İlerle
            </button>
            </div>

              </div>
            
            
          </form>
          
        </div>

      </div>
            </div>
        </div>
        </section>
        </div>
    )
}
