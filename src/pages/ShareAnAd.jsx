import React, { useState,useEffect } from 'react'
import {useFormik} from 'formik';
import Navbar from '../layouts/Navbars/IndexNavbar';
import FooterSmall from '../layouts/Footer/FooterSmall';
import * as Yup from 'yup';
import WorkingTimeService from '../services/workingTimeService';
import CityService from '../services/cityService';
import WayOfWorkingService from '../services/wayOfWorkingService';
import JobPositionService from '../services/jobPositionService';
import JobPostService from '../services/jobPostService';

export default function ShareAnAd() {

    let postService = new JobPostService;

    const [times, setTimes] = useState([])
    const [workings, setWorkings] = useState([])
    const [cities, setCities] = useState([])
    const [positions, setPositions] = useState([])

    useEffect(() => {
        let workingTimeService = new WorkingTimeService();
        workingTimeService.getWorkingTimes().then(result => setTimes(result.data.data))
        let wayOfWorkingService = new WayOfWorkingService();
        wayOfWorkingService.getWorking().then(result => setWorkings(result.data.data))
        let cityService = new CityService();
        cityService.getCities().then(result => setCities(result.data.data))
        let positionService = new JobPositionService();
        positionService.getPositions().then(result => setPositions(result.data.data))
    },[])

    const validationSchema = Yup.object({
        description: Yup.string().required("Zorunlu alan"),
        positionId: Yup.string().required("Pozisyon Seçilmelidir"),
        wayOfWorkingId: Yup.string().required('Çalışma Şekli Seçilmelidir'),
        workingTimeId: Yup.string().required('Çalışma Zamanı Seçilmelidir'),
        positionCount: Yup.number().required('Pozisyon Sayısı Zorunludur'),
        minSalary: Yup.number().required('Metin girilemez!'),
        maxSalary: Yup.number().required('Metin girilemez!'),
        cityId: Yup.string().required('Şehir Seçilmelidir'),  
    });

    const {handleSubmit,handleChange,handleBlur,values,errors,touched} = useFormik({
        initialValues:{
            description:'',
            positionId:'',
            wayOfWorkingId:'',
            workingTimeId:'',
            positionCount:'',
            cityId:'',
            minSalary:'',
            maxSalary:'',
            employerId:'',
        },
        validationSchema,
        onSubmit: values => {
            console.log(values);
            values.employerId = 4; // JWT olmadığı için iş ilanını veren kişinin id sini kendim giriyorum.
            postService.add(values).then(result => console.log(result.data))
        }
    })


    return (
        <div>
            <Navbar/>            
                <section className="pb-20 relative block bg-blueGray-800">

          <div className="container mx-auto px-4 lg:pt-24 pb-20">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-10/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Yeni İlan Ekle
                </h2>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-8/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">İlan Bilgileri</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

          <form onSubmit={handleSubmit}>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              İlan Bilgileriniz
            </h6>

            <div className="px-4 ">

                <div className="flex flex-wrap lg:w-12/12 ">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    İş Tanıtımı
                  </label>
                  <textarea
                    type="text"
                    name="description"
                    placeholder="İş Tanıtımı..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.description}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                  {errors.description &&
                        touched.description &&
                        <p className="text-sm text-red-500">{errors.description}</p>
                    }
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Pozisyon
                  </label>
                  <select
                   className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                   value={values.positionId} 
                   name="positionId"
                   onChange={handleChange}
                   onBlur={handleBlur}>
                       <option value="">Pozisyon Seçin</option>
                        {positions.map(position=>{
                            return <option value={position.id}>{position.positionName}</option>
                        })}
                    </select>
                    {errors.positionId &&
                        touched.positionId &&
                        <p className="text-sm text-red-500">{errors.positionId}</p>
                    }
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Şehir
                  </label>
                  <select
                    name="cityId"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.cityId}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  >
                      <option value="">Şehir Seçin</option>
                      {cities.map(city=>{
                            return <option value={city.id}>{city.name}</option>
                        })}
                  </select>
                  {errors.cityId &&
                        touched.cityId &&
                        <p className="text-sm text-red-500">{errors.cityId}</p>
                    }
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4 mt-5">
                <div className="relative mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Pozisyon Sayısı
                  </label>
                  <input
                    type="text"
                    name="positionCount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.positionCount}
                    placeholder="Pozisyon Sayısı"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                  {errors.positionCount &&
                        touched.positionCount &&
                        <p className="text-sm text-red-500">{errors.positionCount}</p>
                    }
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4 mt-5">
                <div className="relative mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Çalışma Şekli
                  </label>
                  <select
                    name="wayOfWorkingId"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.wayOfWorkingId}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  >
                    <option value="">Çalışma Şeklini Seçin</option>
                    {workings.map(working=>{
                                return <option value={working.id}>{working.working}</option>
                            })}
                  </select>
                  {errors.wayOfWorkingId &&
                        touched.wayOfWorkingId &&
                        <p className="text-sm text-red-500">{errors.wayOfWorkingId}</p>
                    }
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4 mt-5">
                <div className="relative mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Çalışma Zamanı
                  </label>
                  <select
                    name="workingTimeId"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.workingTimeId}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  >
                    <option value="">Çalışma Şeklini Seçin</option>
                    {times.map(time=>{
                                return <option value={time.id}>{time.time}</option>
                            })}
                  </select>
                  {errors.workingTimeId &&
                        touched.workingTimeId &&
                        <p className="text-sm text-red-500">{errors.workingTimeId}</p>
                   }
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4 mt-5">
                <div className="relative mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Max Maaş
                  </label>
                  <input
                    type="text"
                    name="maxSalary"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.maxSalary}
                    placeholder="Max Maaş"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4 mt-5">
                <div className="relative mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Min Maaş
                  </label>
                  <input
                    type="text"
                    name="minSalary"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.minSalary}
                    placeholder="Min Maaş"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
            </div>
               
              <div className="flex flex-wrap">
             
           
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />
            <div className="flex flex-wrap justify-end">
                <button type="submit" className="bg-emerald-500 mt-4 text-white active:bg-emerald-600 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
                    Paylaş
                </button>
            
            </div>

              </div>
            
            
          </form>
          
        </div>

      </div>
            </div>
        </div>
        </section>
            <FooterSmall/>
        </div>
    )
}
