import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import EmployerProfileTab from "../../layouts/Employer/EmployerProfileTab";
import EmployerProfileEditModal from "../../layouts/Employer/EmployerProfileEditModal";
import Navbar from "../../layouts/Navbars/IndexNavbar";
import {
  getEmployerById,
  getEmployersUpdate,
} from "../../store/actions/userAction";
import { ModalProvider } from "react-simple-hook-modal";

export default function EmployerProfile() {
  let { employerId } = useParams();
  const { user } = useSelector((state) => state.users);
  const { updateEmployers } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getEmployerById(employerId));
    dispatch(getEmployersUpdate());
  }, []);

  function checkUpdateProfile() {
    console.log(updateEmployers, "update");
    console.log(user.id, "user");
    let result = updateEmployers.find((e) => e.id === user.id);
    return result ? true : false;
  }

  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/g-g1249nw.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=c07a877bda231ea50550d3f4b1fb9902')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
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
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"></div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      {console.log(checkUpdateProfile(), "bra")}
                      {!checkUpdateProfile() ? (
                        <ModalProvider>
                          <EmployerProfileEditModal user={user} />
                        </ModalProvider>
                      ) : (
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-lightBlue-600 bg-lightBlue-200 uppercase last:mr-0 mr-1">
                          Profil Güncellemeniz Onay Bekliyor
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          22
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Toplam Favori
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Toplam Başvuru
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {user.companyName}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                    {user.webSite}
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    {user.dateOfRegistration}
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    {user.email}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <EmployerProfileTab about={user.description} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </>
  );
}
