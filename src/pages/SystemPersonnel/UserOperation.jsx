import { useDispatch } from "react-redux"
import { activateEmployer, passiveEmployer, rejectEmployer, updateEmployerProfileAccept, updateEmployerProfileReject } from "../../store/actions/systemPersonnelUserActions";

export default function UserOperations({statu,userId}) {
    
    const dispatch = useDispatch();

    const activatedEmployer = (userId) => {
        dispatch(activateEmployer(userId));
    }

    const passivatedEmployer = (userId) => {
        dispatch(passiveEmployer(userId));
    }

    const rejectedEmployer = (userId) => {
        dispatch(rejectEmployer(userId));
    }

    const updatetedEmployerProfileAccept = (userId) => {
        dispatch(updateEmployerProfileAccept(userId));
    }

    const updatetedEmployerProfileReject = (userId) => {
        dispatch(updateEmployerProfileReject(userId));
    }


    const checkActive = (statu) => {
        if(statu === "WAITING_APPROVAL"){
            return (<>
                    <button
                className={
                    "bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                }
                onClick={() => activatedEmployer(userId)}
                >
                AKTİFLEŞTİR
                </button>

                <button
                className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={() => rejectedEmployer(userId)}
                >
                Reddet
                </button>
                </>
            )
        }
        else if(statu === "PROFILE_WAITING_APPROVAL"){
            return (<>
                    <button
                className={
                    "bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                }
                onClick={() => updatetedEmployerProfileAccept(userId)}
                >
                Onayla
                </button>

                <button
                className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={() => updatetedEmployerProfileReject(userId)}
                >
                Reddet
                </button>
                </>
            )
        }
        else if(statu === "ACTIVE"){
            return (
                <button
            className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            onClick={() => passivatedEmployer(userId)}
            >
            PASİFLEŞTİR
            </button>
            )
        }
        else if (statu === "PASSIVE") {
            return (
            <button
                className={
                    "bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                }
                onClick={() => activatedEmployer(userId)}
                >
                AKTİFLEŞTİR
            </button>
            )
        }

}
        return (
            <>
                {checkActive(statu)}
            </>
        )

}

