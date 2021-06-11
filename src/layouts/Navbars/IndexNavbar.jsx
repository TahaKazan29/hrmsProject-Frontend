import React from "react";
import { Link } from "react-router-dom";
import RegisterDropdown from "../Dropdowns/RegisterDropdown.jsx";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              İnsan Kaynakları
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
            
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
                <Link
                className="bg-orange-500 text-white active:bg-orange-600 font-bold text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  to="/shareAnAd">
                    <div className="flex flex-wrap">
                      <i class="fas fa-search pt-1"></i>
                      <p className="pl-2">İlan Ver</p>
                    </div>
                </Link>
              </li>
            <li className="flex items-center">
                <Link
                className="bg-orange-500 text-white active:bg-orange-600 font-bold text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  to="/jobPostings">
                    <div className="flex flex-wrap">
                      <i class="fas fa-search pt-1"></i>
                      <p className="pl-2">İş Ara</p>
                    </div>
                </Link>
              </li>
            <li className="flex items-center">
                <Link
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  to="/cv">
                    <div className="flex flex-wrap">
                      <i className="far fa-address-card pt-1" ></i>
                      <p className="pl-2">Özgeçmiş Oluştur</p>
                    </div>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/auth/login"
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  <div className="flex flex-wrap">
                      <i class="fas fa-sign-in-alt pt-1"></i>
                      <p className="pl-2">Oturum Aç</p>
                    </div>
                </Link>
              </li>
              <li className="flex items-center">
                <RegisterDropdown />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
}
