import React from "react";
import { Link } from "react-router-dom";
import IndexNavbar from "../layouts/Navbars/IndexNavbar.jsx";
import Footer from "../layouts/Footer/Footer.jsx";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Hayellerinizin Kariyerini Bulun
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              Anlamlı ve yapmaya değer bir iş bulmanın uzun bir yolculuk olduğunu biliyoruz. Hedefimiz bu işlemi sizin için mümkün olduğu kadar kolaylaştırmak ve her gün gitmeye can attığınız, tatmin edici bir iş ortamı yaratmak. Varolan işlere göz atarak yolculuğunuza bizimle başlayın.
              </p>
              <div className="mt-12">
                <Link
                  to="/jobPostings"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  İş İlanlarını Görüntüle
                </Link>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src='https://www.akinsoft.com.tr/kurumsal-kaynak-planlamasi/resim/insan-kaynaklari/insan-kaynaklari-cozumleri.png'
          alt="..."
        />
      </section>

      <Footer />
    </>
  );
}
