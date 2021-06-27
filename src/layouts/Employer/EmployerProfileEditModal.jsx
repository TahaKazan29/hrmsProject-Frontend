import { Modal, useModal, ModalTransition } from "react-simple-hook-modal";
import "react-simple-hook-modal/dist/styles.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TkTextInput from "../../Common/CustomFormControls/TkTextInput";
import TkTextarea from "../../Common/CustomFormControls/TkTextarea";
import { useDispatch } from "react-redux";
import { updateEmployer } from "../../store/actions/userAction";
const EmployerProfileEditModal = ({ user }) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  const validationSchema = Yup.object({});
  const dispatch = useDispatch();

  const initialValues = {
    companyName: user.companyName,
    webSite: user.webSite,
    description: user.description,
    email: user.email,
    phoneNumber: user.phoneNumber,
    id:2 //default value 
  };

  return (
    <>
      <button
        className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={openModal}
      >
        Bilgileri Güncelle
      </button>
      <Modal isOpen={isModalOpen} transition={ModalTransition.BOTTOM_UP}>
        <div className="-mt-5">
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-semibold">Şirket Bilgileri</h3>
          </div>
          <div className="relative p-6 flex-auto">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                dispatch(updateEmployer(values));
              }}
            >
              <Form>
                <div className="px-4 py-4 ">
                  <div className="flex flex-wrap lg:w-12/12 ">
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <TkTextarea
                          name="description"
                          rows="5"
                          label="Hakkında"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <TkTextInput name="companyName" label="ŞİRKET ADI" />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <TkTextInput name="webSite" label="WEB SITE ADRESİ" />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <TkTextInput name="email" label="EMAİL" />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <TkTextInput
                          name="phoneNumber"
                          label="TELEFON NUMARASI"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold  mt-3 uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={closeModal}
                  >
                    Kapat
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 mt-3 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Güncelle
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </Modal>
    </>
  );
};

export default EmployerProfileEditModal;
