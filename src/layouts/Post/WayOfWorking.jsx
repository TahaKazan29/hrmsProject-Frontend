import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux';
import WayOfWorkingService from '../../services/Post/wayOfWorkingService';
import { addWayOfWorkingToFilter } from '../../store/actions/postActions';

export default function WayOfWorking() {

    const [workings, setWorkings] = useState([])
    const dispatch = useDispatch();
    const [currentCityCount, setCurrentCityCount] = useState(0)

    useEffect(() => {
        let wayOfWorkingService = new WayOfWorkingService();
        wayOfWorkingService.getWorking().then(result => setWorkings(result.data.data))
    },[])

    const handleWayOfWorkingChange = (e) => {
        dispatch(addWayOfWorkingToFilter(e.target.value))
        setCurrentCityCount(currentCityCount+1)
    } 

    return (
        <>
                    <div className="relative min-w-0 break-words bg-white mb-8 shadow-lg rounded">
                        <div className="px-4 py-5 ">
                        <h6 className="text-xl font-semibold ">
                            Çalışma Şekli  {currentCityCount != 0 ? <span className="text-sm text-emerald-500">seçili ({currentCityCount})</span> : null}
                        </h6>
                            <hr className="my-4 border-blueGray-300" />
                        <div className="h-145-px overflow-y-auto" >
                        {workings.map(working => ( 
                            <div key={working.id}>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input
                                        value={working.id}
                                        onChange={(e) => handleWayOfWorkingChange(e)} 
                                        type="checkbox"
                                        className="form-checkbox rounded text-blueGray-700 ml-1 mr-3 border-blueGray-400 w-4 h-4 ease-linear transition-all duration-150"
                                    />
                                    <p className="text-blueGray-500 text-sm leading-relaxed">
                                        {working.working}
                                    </p>
                                </label>
                            </div>
                        ))}
                        </div>
                        </div>
                    </div>
    </>        
    )
}
