import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux';
import JobPositionService from "../../services/Post/jobPositionService"
import { addPositionToFilter } from '../../store/actions/postActions';

export default function JobPosition() {

    const [positions, setPositions] = useState([])
    const dispatch = useDispatch();
    const [currentCityCount, setCurrentCityCount] = useState(0)

    useEffect(() => {
        let positionService = new JobPositionService();
        positionService.getPositions().then(result => setPositions(result.data.data))
    },[])

    const handlePositionChange = (e) => {
        dispatch(addPositionToFilter(e.target.value))
        setCurrentCityCount(currentCityCount+1)
    } 

    return (
        <>
                    <div className="relative min-w-0 break-words bg-white mb-8 shadow-lg rounded">
                        <div className="px-4 py-5 ">
                        <h6 className="text-xl font-semibold ">
                            Pozisyon  {currentCityCount != 0 ? <span className="text-sm text-emerald-500">seçili ({currentCityCount})</span> : null}
                        </h6>
                            <hr className="my-4 border-blueGray-300" />
                        <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
                            <div className="relative flex w-full flex-wrap items-stretch">
                            <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                                <i className="fas fa-search"></i>
                            </span>
                            <input
                                type="text"
                                placeholder="Pozisyon Ara"
                                className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative mb-4 border-blueGray-300 rounded text-sm outline-none focus:outline-none w-full pl-10"
                            />
                            </div>
                        </form>
                        <div className="h-145-px overflow-y-auto" >
                        {positions.map(position => ( 
                            <div key={position.id}>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input
                                        value={position.id}
                                        onChange={(e) => handlePositionChange(e)} 
                                        type="checkbox"
                                        className="form-checkbox rounded text-blueGray-700 ml-1 mr-3 border-blueGray-400 w-4 h-4 ease-linear transition-all duration-150"
                                    />
                                    <p className="text-blueGray-500 text-sm leading-relaxed">
                                        {position.positionName}
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
