import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import HeaderSetting from "../../../layouts/Headers/HeaderSetting";
import SystemPersonnelNavbar from "../../../layouts/Navbars/SystemPersonnelNavbar";
import { getPersonnelById, updatePersonnel } from "../../../store/actions/systemPersonnelAction";
import CardProfile from "./CardProfile";
import TKTextInput from "../../../Common/CustomFormControls/TkTextInput";
import FooterSystemPersonnel from "../../../layouts/Footers/FooterSystemPersonnel";

export default function CardSettings() {
  let { personnelId } = useParams();
  const { personnel } = useSelector((state) => state.personnels);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPersonnelById(personnelId));
  },[]);

  const validationSchema = Yup.object({});

  const initialValues = {
    firstName: personnel.firstName ? personnel.firstName : '',
    lastName: personnel.lastName ? personnel.lastName : '',
    email: personnel.email ? personnel.email : '',
    id:"3" //default value
  };

  return (
    <>
      <div className="relative md:ml-64 bg-blueGray-100">
        <SystemPersonnelNavbar />
        <HeaderSetting />
        <div className="px-4 md:px-10 mx-auto w-full -m-20">
          <div className="flex flex-wrap mt-4">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                  <div className="text-center flex justify-between">
                    <h6 className="text-blueGray-700 text-xl font-bold">
                      Profil Bilgileri
                    </h6>
                  </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <Formik
                    enableReinitialize={true} 
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={async (values) => {
                      await new Promise((r) => setTimeout(r, 500));
                      console.log(values)
                      dispatch(updatePersonnel(values))
                    }}
                  >
                    <Form>
                      <div className="flex flex-wrap mt-6">
                        <div className="w-full lg:w-6/12 px-4">
                          <div className="relative w-full mb-3">
                            <TKTextInput name="firstName" label="İSİM" />
                          </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                          <div className="relative w-full mb-3">
                            <TKTextInput name="lastName" label="SOYİSİM"/>
                          </div>
                        </div>
                        <div className="w-full lg:w-12/12 px-4">
                          <div className="relative w-full mb-3">
                            <TKTextInput name="email" label="EMAİL"/>
                          </div>
                          <div className="flex flex-wrap justify-end">
                            <button
                              type="submit"
                              className="bg-emerald-500 mt-4 text-white active:bg-emerald-600 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            >
                              GÜNCELLE
                            </button>
                          </div>
                        </div>
                      </div>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-4/12 px-4">
              <CardProfile personnel={personnel}/>
            </div>
          </div>
          <FooterSystemPersonnel />
        </div>
      </div>
    </>
  );
}
