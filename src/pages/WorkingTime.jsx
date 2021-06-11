import React, { useState,useEffect } from 'react'
import WorkingTimeService from "../services/workingTimeService"

export default function WorkingTime() {

    const [times, setTimes] = useState([])

    useEffect(() => {
        let workingTimeService = new WorkingTimeService();
        workingTimeService.getWorkingTimes().then(result => setTimes(result.data.data))
    },[])

    return (
        <>
                    <div className="relative min-w-0 break-words bg-white mb-8 shadow-lg rounded">
                        <div className="px-4 py-5 ">
                        <h6 className="text-xl font-semibold ">
                            Çalışma Zamanı
                        </h6>
                            <hr className="my-4 border-blueGray-300" />
                        <div className="h-145-px overflow-y-auto" >
                        {times.map(time => ( 
                            <div key={time.id}>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input
                                        id="customCheckLogin"
                                        type="checkbox"
                                        className="form-checkbox rounded text-blueGray-700 ml-1 mr-3 border-blueGray-400 w-4 h-4 ease-linear transition-all duration-150"
                                    />
                                    <p className="text-blueGray-500 text-sm leading-relaxed">
                                        {time.time}
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
