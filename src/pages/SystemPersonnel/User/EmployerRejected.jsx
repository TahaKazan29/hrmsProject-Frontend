import React from 'react'
import {checkStatus,checkStatusColor} from '../StatusControl'
import { useEffect,useState } from "react";
import EmployerService from '../../../services/Employer/employerService';
import SystemPersonnelNavbar from '../../../layouts/Navbars/SystemPersonnelNavbar';
import HeaderUser from '../../../layouts/Headers/HeaderUser';
import FooterSystemPersonnel from '../../../layouts/Footers/FooterSystemPersonnel';
import UserDropdown from '../../../layouts/Dropdowns/UserDropdown'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getEmployersReject } from '../../../store/actions/userAction';

export default function EmployerActive() {

  const dispatch = useDispatch();

  const {rejectedEmployers} = useSelector(state => state.users)

  const employerList = rejectedEmployers.length ? (
    rejectedEmployers.map((employer) => (
      <tr key={employer.id}>
          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{employer.companyName}</th>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{employer.webSite}</td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{employer.phoneNumber}</td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{employer.dateOfRegistration}</td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><i className={"fas fa-circle mr-2 "+(checkStatusColor(employer.status))}></i>{checkStatus(employer.status)}</td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
            <UserDropdown userStatu={employer.status} userId={employer.id}/>
          </td>
      </tr>
 ))
  ) : (
    <tr>
      <th> Listelenecek İşveren Bulunamadı !</th>
    </tr>
  )

  useEffect(() => {
    dispatch(getEmployersReject())
  },[])

    return (
        <div>
            <>
            <div className="relative md:ml-64 bg-blueGray-100">
              <SystemPersonnelNavbar/>
              <HeaderUser />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                <div className="relative flex flex-col min-w-0 break-words bg-lightBlue-900 text-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-lg text-white">
                Reddedilen İşverenler
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-dark border-collapse">
            <thead>
                <tr>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">
                        ŞİRKET
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">
                        WEB SİTE
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">
                        TELEFON
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">
                        KAYIT TARİHİ
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">
                        DURUMU
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">
                    </th>
                </tr>
            </thead>
            <tbody>
               {employerList}
            </tbody>
          </table>
        </div>
      </div>
      <FooterSystemPersonnel/>
                </div>
              </div>
      
    </>
        </div>
    )
}
