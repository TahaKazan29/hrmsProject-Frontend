import React, { useState } from "react";
import { useEffect } from "react";
import { Formik, Form, FieldArray, Field } from "formik";
import * as Yup from "yup";
import Navbar from "../../layouts/Navbars/IndexNavbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../index.css";
import JobPositionService from "../../services/Post/jobPositionService";
import TkTextInput from "../../Common/CustomFormControls/TkTextInput";
import TkSelect from "../../Common/CustomFormControls/TkSelect";
import ForeignLanguage from "./ForeignLanguage";

export default function WorkExperience() {
  const [positions, setPositions] = useState([]);
  const [count, setCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  function handleClick(value) {
    console.log(value);
  }

  useEffect(() => {
    let positionService = new JobPositionService();
    positionService
      .getPositions()
      .then((result) => setPositions(result.data.data));
  }, []);

  const validationSchema = Yup.object({});

  const initialValues = {
    workExperiences: [
      {
        positionId: "",
        companyName: "",
        dateOfStart: "",
        dateOfEnd: "",
        description: "",
      },
    ],
    foreignLanguages: [
      {
        languageName: "",
        languageLevel: "",
      },
    ],
    hobby: "",
  };

  return (
    <div>
      <ToastContainer position="bottom-right" />
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
                Deneyimler ve Bilgiler
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
                    Deneyimleriniz ve Yetenekleriniz
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
                  {({ values }) => (
                    <Form>
                      <FieldArray name="workExperiences">
                        {({ insert, remove, push }) => (
                          <div className="px-4 ">
                            {values.workExperiences.length > 0 &&
                              values.workExperiences.map(
                                (workExperience, index) => (
                                  <div key={index}>
                                    <h6 className="w-full text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                      İŞ DENEYİMİ
                                    </h6>
                                    <div className="flex flex-wrap lg:w-12/12 ">
                                      <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                          <TkTextInput
                                            name={`workExperiences.${index}.companyName`}
                                            label="ŞİRKET ADI"
                                            placeholder="Şirket Adını Giriniz"
                                          />
                                        </div>
                                      </div>
                                      <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                          <TkSelect
                                            name={`workExperiences.${index}.positionId`}
                                            id="positionId"
                                            options={positions}
                                            label="POZİSYON"
                                            defaultValue="Pozisyon Seçin"
                                          />
                                        </div>
                                      </div>
                                      <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                          <TkTextInput
                                            type="date"
                                            name={`workExperiences.${index}.dateOfStart`}
                                            label="BAŞLANGIÇ TARİHİ"
                                          />
                                        </div>
                                      </div>
                                      <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                          <TkTextInput
                                            type="date"
                                            name={`workExperiences.${index}.dateOfEnd`}
                                            label="BİTİŞ TARİHİ"
                                          />
                                        </div>
                                        <div>
                                          <label className="inline-flex items-center cursor-pointer">
                                            <input
                                              id="deneme"
                                              type="checkbox"
                                              className="form-checkbox rounded text-blueGray-700 ml-1 mr-3 border-blueGray-400 w-4 h-4 ease-linear transition-all duration-150"
                                            />
                                            <p className="text-blueGray-500 text-sm leading-relaxed">
                                              Devam Ediyor
                                            </p>
                                          </label>
                                        </div>
                                      </div>
                                      <div className="w-full lg:w-12/12 px-4">
                                        <div className="relative w-full mb-3">
                                          <TkTextInput
                                            name={`workExperiences.${index}.description`}
                                            label="İŞ AÇIKLAMASI"
                                            placeholder="İş Açıklamasını Girin"
                                          />
                                        </div>
                                        {index != 0 ? (
                                          <button
                                            type="button"
                                            className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            onClick={() => remove(index)}
                                          >
                                            Çıkar
                                          </button>
                                        ) : null}
                                      </div>
                                      <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                          <button
                                            type="button"
                                            className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            onClick={() =>
                                              push({
                                                positionId: "",
                                                companyName: "",
                                                dateOfStart: "",
                                                dateOfEnd: "",
                                                description: "",
                                              })
                                            }
                                          >
                                            İş Deneyimi Ekle
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )
                              )}
                          </div>
                        )}
                      </FieldArray>
                      <FieldArray name="foreignLanguages">
                        {({ insert, remove, push }) => (
                          <div className="px-4">
                            {values.foreignLanguages.length > 0 &&
                              values.foreignLanguages.map(
                                (foreignLanguage, index) => (
                                  <div key={index}>
                                    <h6 className="w-full text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                      YABANCI DİLLER
                                    </h6>
                                    <div className="flex flex-wrap lg:w-12/12 ">
                                      <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                          <TkTextInput
                                            name={`foreignLanguages.${index}.languageName`}
                                            label="YABANCI DİL"
                                            placeholder="Dil Giriniz"
                                          />
                                        </div>
                                        {index != 0 ? (
                                          <button
                                            type="button"
                                            className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            onClick={() => remove(index)}
                                          >
                                            Çıkar
                                          </button>
                                        ) : null}
                                      </div>
                                      <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                          <TkTextInput
                                            name={`foreignLanguages.${index}.languageLevel`}
                                            label="DİL SEVİYESİ"
                                            placeholder="Kötü - Orta - İyi - İleri Seviye"
                                          />
                                        </div>
                                      </div>
                                      <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                          <button
                                            type="button"
                                            className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            onClick={() =>
                                              push({
                                                languageName: "",
                                                languageLevel: "",
                                              })
                                            }
                                          >
                                            Yabancı Dil Ekle
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )
                              )}
                          </div>
                        )}
                      </FieldArray>
                      <div className="px-4">
                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                          <TkTextInput
                            name="hobbiy"
                            label="HOBILERINIZ"
                            placeholder="Hobilerinizi Girin"
                          />
                        </div>
                      </div>
                      </div>
                      <hr className="mt-6 border-b-1 border-blueGray-300" />
                      <div className="flex flex-wrap justify-end">
                        <button
                          type="submit"
                          className="bg-emerald-500 mt-4 text-white active:bg-emerald-600 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        >
                          Kaydet ve İlerle
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
