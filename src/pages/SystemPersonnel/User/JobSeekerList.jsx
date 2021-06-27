import React from 'react'
import { useEffect,useState } from "react";
import JobSeekerService from '../../../services/JobSeeker/jobSeekerService';
import SystemPersonnelNavbar from '../../../layouts/Navbars/SystemPersonnelNavbar';
import HeaderUser from '../../../layouts/Headers/HeaderUser';
import FooterSystemPersonnel from '../../../layouts/Footers/FooterSystemPersonnel';
import UserDropdown from '../../../layouts/Dropdowns/UserDropdown'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getJobSeekers } from '../../../store/actions/userAction';

export default function JobSeekerList() {

  const dispatch = useDispatch();

  const {jobSeekers} = useSelector(state => state.users)

  useEffect(() => {
    dispatch(getJobSeekers())
  },[])

  const jobSeekersList = jobSeekers.length ? (
    jobSeekers.map((jobSeeker) => (
      <tr key={jobSeeker.id}>
          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{jobSeeker.firstName}</th>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{jobSeeker.lastName}</td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{jobSeeker.identityNumber}</td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{jobSeeker.birthYear}</td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{jobSeeker.dateOfRegistration}</td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
            <UserDropdown userStatu={jobSeeker.status} userId={jobSeeker.id}/>
          </td>
      </tr>
 ))
  ) : (
    <tr>
      <td> Listelenecek İş Arayan Bulunamadı !</td> 
    </tr>
  )

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
                İş Arayanlar
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-dark border-collapse">
            <thead>
                <tr>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">
                        Ad
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">
                        SOYAD
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">
                        TC KİMLİK NO
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">
                        DOĞUM YILI
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">
                        KAYIT TARİHİ
                    </th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700">
                    </th>
                </tr>
            </thead>
            <tbody>
               {jobSeekersList}
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
