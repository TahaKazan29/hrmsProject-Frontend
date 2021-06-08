import React, { useState,useEffect } from 'react'
import WayOfWorkingService from "../services/wayOfWorkingService"

export default function WayOfWorking() {

    const [workings, setWorkings] = useState([])

    useEffect(() => {
        let wayOfWorkingService = new WayOfWorkingService();
        wayOfWorkingService.getWorking().then(result => setWorkings(result.data.data))
    })

    return (
        <>
                    <div className="relative min-w-0 break-words bg-white mb-8 shadow-lg rounded">
                        <div className="px-4 py-5 ">
                        <h6 className="text-xl font-semibold ">
                            Çalışma Şekli
                        </h6>
                            <hr className="my-4 border-blueGray-300" />
                        <div className="h-145-px overflow-y-auto" >
                        {workings.map(working => ( 
                            <div key={working.id}>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input
                                        id="customCheckLogin"
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
