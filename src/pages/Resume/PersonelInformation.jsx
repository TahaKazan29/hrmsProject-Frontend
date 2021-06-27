import React, { useState } from "react";
import Navbar from "../../layouts/Navbars/IndexNavbar";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CityService from "../../services/Post/cityService";
import GenderService from "../../services/Resume/genderService";
import DriverLicenseService from "../../services/Resume/driverLicenseService";
import WorkingSituationService from "../../services/Resume/workingSituationService";
import MilitaryStatusService from "../../services/Resume/militaryStatusService";
import MaritalStatusService from "../../services/Resume/maritalStatusService";
import TkTextInput from "../../Common/CustomFormControls/TkTextInput";
import TkSelect from "../../Common/CustomFormControls/TkSelect";

export default function PersonelInformation() {
  const [cities, setCities] = useState([]);
  const [genders, setGenders] = useState([]);
  const [militaryStatus, setMilitaryStatus] = useState([]);
  const [maritalStatus, setMaritalStatus] = useState([]);
  const [driverLincenses, setDriverLicenses] = useState([]);
  const [workingSituations, setWorkingSituations] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
    let genderService = new GenderService();
    genderService.getGenders().then((result) => setGenders(result.data.data));
    let workingSituationService = new WorkingSituationService();
    workingSituationService
      .getWorkingSituations()
      .then((result) => setWorkingSituations(result.data.data));
    let driverLicenseService = new DriverLicenseService();
    driverLicenseService
      .getDriverLicenses()
      .then((result) => setDriverLicenses(result.data.data));
    let militaryStatusSerivce = new MilitaryStatusService();
    militaryStatusSerivce
      .getMilitaryStatus()
      .then((result) => setMilitaryStatus(result.data.data));
    let maritalStatusService = new MaritalStatusService();
    maritalStatusService
      .getMaritalStatus()
      .then((result) => setMaritalStatus(result.data.data));
  }, []);

  const validationSchema = Yup.object({});

  const initialValues = {
    github:'',
    linkedin:'',
    address:'',
    birthDate: "",
    name: "",
    lastName: "",
    email: "",
    genderId: "",
    militaryStatusId: "",
    driverLicenseId: "",
    maritalStatusId: "",
    workingSituationId: "",
    cityId: "",
    resumeId: "1",
  };

  return (
    <div>
      <Navbar />
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
                Kişisel Bilgiler
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-user text-xl"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">Kişisel</h5>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-address-book text-xl"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Eğitim Bilgileri
              </h5>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-address-book text-xl"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Deneyim ve Bilgiler
              </h5>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-8/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
              <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-xl font-bold">
                    Kişisel Bilgiler
                  </h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    console.log(values);
                  }}
                >
                  <Form>
                    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                      KİŞİSEL BİLGİLERİNİZ
                    </h6>

                    <div className="px-4 ">
                      <div className="flex flex-wrap relative w-40 mx-auto justify-center mb-8">
                        <img
                          alt="..."
                          src={
                            require("../../assets/img/team-3-800x800.jpg")
                              .default
                          }
                          className="shadow-lg rounded-full max-w-120-px"
                        />
                        <button
                          className="bg-purple-500 mt-4 text-white active:bg-pruple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Fotoğraf Yükle
                        </button>
                      </div>
                      <div className="flex flex-wrap lg:w-12/12 ">
                        <div className="w-full lg:w-6/12 px-4">
                          <div className="relative w-full mb-3">
                            <TkTextInput
                              name="name"
                              label="AD"
                              placeholder="Adınız"
                            />
                          </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                          <div className="relative w-full mb-3">
                            <TkTextInput
                              name="lastName"
                              label="SOYAD"
                              placeholder="Soyadınız"
                            />
                          </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                          <div className="relative w-full mb-3">
                            <TkTextInput
                              name="email"
                              label="EMAİL"
                              placeholder="Email adresiniz"
                            />
                          </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                          <div className="relative w-full mb-3">
                            <TkTextInput
                              name="birthDate"
                              label="DOĞUM TARİHİ"
                              type="date"
                            />
                          </div>
                        </div>

                        <div className="w-full lg:w-6/12 px-4">
                          <div className="relative w-full mb-3">
                            <TkSelect
                              name="cityId"
                              id="cityId"
                              options={cities}
                              label="ŞEHİR"
                              defaultValue="Şehir Seçin"
                            />
                          </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                          <div className="relative w-full mb-3">
                          <TkSelect
                              name="genderId"
                              id="genderId"
                              options={genders}
                              label="CİNSTİYET"
                              defaultValue="Cinsiyet Seçin"
                            />
                          </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                          <div className="relative w-full mb-3">
                          <TkSelect
                              name="militaryStatusId"
                              id="militaryStatusId"
                              options={militaryStatus}
                              label="ASLERKİK DURUMU"
                              defaultValue="Askerlik Durumu Seçin"
                            />
                          </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                          <div className="relative w-full mb-3">
                          <TkSelect
                              name="workingSituationId"
                              id="workingSituationId"
                              options={workingSituations}
                              label="ÇALIŞMA DURUMU"
                              defaultValue="Çalışma Durumu Seçin"
                            />
                          </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                          <div className="relative w-full mb-3">
                          <TkSelect
                              name="driverLicenseId"
                              id="driverLicenseId"
                              options={driverLincenses}
                              label="SÜRÜCÜ BELGESİ"
                              defaultValue="Sürücü Belgesi Durumunu Seçin"
                            />
                          </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                          <div className="relative w-full mb-3">
                          <TkSelect
                              name="maritalStatusId"
                              id="maritalStatusId"
                              options={maritalStatus}
                              label="MEDENİ DURUMU"
                              defaultValue="Medeni Durumu Seçin"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full lg:w-12  /12 px-4 mt-2">
                        <div className="relative mb-3">
                        <TkTextInput
                              name="address"
                              label="Açık Adres"
                              placeholder="Açık Adresiniz"
                            />
                        </div>
                      </div>
                      <div className="flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4 mt-2">
                          <div className="relative mb-3">
                          <TkTextInput
                              name="github"
                              label="GitHub"
                              placeholder="Github Adresiniz"
                            />
                          </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4 mt-2">
                          <div className="relative mb-3">
                          <TkTextInput
                              name="linkedin"
                              label="LinkedIn"
                              placeholder="Linkedin Adresiniz"
                            />
                          </div>
                        </div>
                      </div>
                      <hr className="mt-6 border-b-1 border-blueGray-300" />
                      <div className="flex flex-wrap justify-end">
                        {/* <Link to="/resume/educationInformation"> */}
                          <button
                            className="bg-emerald-500 mt-4 text-white active:bg-emerald-600 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="submit"
                          >
                            Kaydet ve İlerle
                          </button>
                        {/* </Link> */}
                      </div>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
