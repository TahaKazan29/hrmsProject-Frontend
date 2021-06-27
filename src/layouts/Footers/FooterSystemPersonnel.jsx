import React from "react";
import {Link} from 'react-router-dom'
export default function FooterSystemPersonnel() {
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-blueGray-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                Copyright © TK-Hrms
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                <Link to="">
                    <p
                      className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                    >
                      İnsan Kaynakları
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <p
                      className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                    >
                      Hakkımızda
                    </p>
                  </Link>
                </li>
                <li>
                <Link to="">
                  <p
                    className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                  >
                    Blog
                  </p>
                  </Link>
                </li>
                <li>
                <Link to="">
                    <p
                      className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                    >
                      Lisans
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
