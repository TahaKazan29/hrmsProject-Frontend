import React, { useState } from "react";
import { useEffect } from "react";
import { Formik, Form, FieldArray,Field } from "formik";
import TkTextInput from "../../Common/CustomFormControls/TkTextInput";
import TkSelect from "../../Common/CustomFormControls/TkSelect";
import * as Yup from "yup";
import UniversityService from "../../services/Resume/universityService";
import Navbar from "../../layouts/Navbars/IndexNavbar";
import FaculityService from "../../services/Resume/faculityService";
import EducationLevelService from "../../services/Resume/educationLevelService";
import { ToastContainer, toast } from "react-toastify";
import "../../index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFaculityId,
} from "../../store/actions/educationActions";
export default function EducationInformation() {

  const dispatch = useDispatch();
  // const [isChecked, setIsChecked] = useState(false);
  const [universityId, setUniversityId] = useState();
  const { sections } = useSelector((state) => state.educations);
  const [universities, setUniversities] = useState([]);
  const [faculities, setFaculities] = useState([]);
  const [educationLevels, setEducationLevels] = useState([]);

  const handleOnChange = () => {
    // setIsChecked(!isChecked);
  };

  useEffect(() => {
    let universityService = new UniversityService();
    universityService
      .getUniversities()
      .then((result) => setUniversities(result.data.data));
    let educationLevelService = new EducationLevelService();
    educationLevelService
      .getEducationLevels()
      .then((result) => setEducationLevels(result.data.data));
  }, []);

  const validationSchema = Yup.object({});

  const initialValues = {
    universityInformation: [
      {
        faculityId: '',
        uniId: '',
        eduLevelId: '',
        sectionId: '',
      },
    ],
    highSchoolName: '',
    highSchoolSectionName: '',
    highSchoolStartingDate: '',
  };

  const selectedUniverstiy = (e) => {
    setUniversityId(e.target.value);
    let faculityService = new FaculityService();
    faculityService
      .getFaculities(e.target.value)
      .then((result) => setFaculities(result.data.data));
  };

  const selectedFaculity = (e) => {
    dispatch(changeFaculityId(e.target.value, universityId));
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
                Eğitim Bilgileri
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
                    Eğitim Bilgileriniz
                  </h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <Formik 
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    console.log(values)
                  }}
                >
                  {({ values }) => (  
                    <Form>
                      <div className="px-4 ">
                        <h6 className="w-full text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                          LİSE
                        </h6>
                        <div className="flex flex-wrap lg:w-12/12 ">
                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <TkTextInput
                                name="highSchoolName"
                                label="LİSE ADI"
                                placeholder="Lise Adını Giriniz"
                              />
                            </div>
                          </div>

                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <TkTextInput
                                name="highSchoolSectionName"
                                label="LİSE BÖLÜMÜ"
                                placeholder="Lise Bölümünü Giriniz"
                              />
                            </div>
                          </div>

                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <TkTextInput
                                name="highSchoolStartingDate"
                                label="BAŞLANGIÇ TARİHİ"
                                type="date"
                              />
                            </div>
                          </div>

                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <TkTextInput
                                name="highSchoolEndDate"
                                label="BİTİŞ TARİHİ"
                                type="date"
                              />
                            </div>
                            <div>
                              <label className="inline-flex items-center cursor-pointer">
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

                          <FieldArray name="universityInformation">
                            {({ insert, remove, push }) => (
                              <>
                                {values.universityInformation.length > 0 &&
                                  values.universityInformation.map(
                                    (university, index) => (
                                      <div
                                        className="flex flex-wrap"
                                        key={index}
                                      >
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
                                            <Field
                                              as="select"
                                              name={`universityInformation.${index}.uniId`}
                                              onBlur={selectedUniverstiy}
                                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            >
                                              <option value="">
                                                Üniversite Seçin
                                              </option>
                                              {universities?.map((uni) => {
                                                return (
                                                  <option
                                                    key={uni.id}
                                                    value={uni.id}
                                                  >
                                                    {uni.name}
                                                  </option>
                                                );
                                              })}
                                            </Field>
                                          </div>
                                        </div>

                                        <div className="w-full lg:w-6/12 px-4">
                                          <div className="relative w-full mb-3">
                                            <label
                                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                              htmlFor="grid-password"
                                            >
                                              FAKÜLTE ADI
                                            </label>
                                            <Field
                                              as = 'select'
                                              name={`universityInformation.${index}.faculityId`}
                                              onBlur={selectedFaculity}
                                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            >
                                              <option value="">
                                                Fakülte Seçin
                                              </option>
                                              {faculities?.map((faculity) => {
                                                return (
                                                  <option
                                                    key={faculity.id}
                                                    value={faculity.id}
                                                  >
                                                    {faculity.name}
                                                  </option>
                                                );
                                              })}
                                            </Field>
                                          </div>
                                        </div>

                                        <div className="w-full lg:w-6/12 px-4">
                                          <div className="relative w-full mb-3">
                                            <label
                                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                              htmlFor="grid-password"
                                            >
                                              BÖLÜM ADI
                                            </label>
                                            <Field
                                              as = 'select'
                                              name={`universityInformation.${index}.selectionId`}
                                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            >
                                              <option value="">
                                                Bölüm Seçin
                                              </option>
                                              {sections?.map((section) => {
                                                return (
                                                  <option
                                                    key={section.id}
                                                    value={section.id}
                                                  >
                                                    {section.name}
                                                  </option>
                                                );
                                              })}
                                            </Field>
                                          </div>
                                        </div>

                                        <div className="w-full lg:w-6/12 px-4">
                                          <div className="relative w-full mb-3">
                                            <TkSelect
                                              name={`universityInformation.${index}.eduLevelId`}
                                              id="eduLevelId"
                                              options={educationLevels}
                                              label="EĞİTİM SEVİYESİ"
                                              defaultValue="Eğitim Seviyesi Seçin"
                                            />
                                          </div>
                                        </div>

                                        <div className="w-full lg:w-6/12 px-4">
                                          <div className="relative w-full mb-3">
                                            <label
                                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                              htmlFor="grid-password"
                                            >
                                              Başlangıç TARİHİ
                                            </label>
                                            <input
                                              type="date"
                                              id="university1"
                                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                                                type="checkbox"
                                                className="form-checkbox rounded text-blueGray-700 ml-1 mr-3 border-blueGray-400 w-4 h-4 ease-linear transition-all duration-150"
                                              />
                                              <p className="text-blueGray-500 text-sm leading-relaxed">
                                                Mezun Değilim
                                              </p>
                                            </label>
                                          </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                          <div className="relative w-full mb-3">
                                            <button
                                              type="button"
                                              className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                              onClick={() =>
                                                push({
                                                  faculityId: "",
                                                  uniId: "",
                                                  eduLevelId: "",
                                                  sectionId: "",
                                                })
                                              }
                                            >
                                              Üniversite Ekle
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    )
                                  )}
                              </>
                            )}
                          </FieldArray>
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