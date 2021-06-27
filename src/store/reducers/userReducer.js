import { EMPLOYER_ACTIVE_ERROR, EMPLOYER_ACTIVE_SUCCESS, EMPLOYER_PASSIVE_ERROR, EMPLOYER_PASSIVE_SUCCESS, EMPLOYER_REJECTED_ERROR, EMPLOYER_REJECTED_SUCCESS, UPDATE_EMPLOYER_PROFILE_ACCEPT_ERROR, UPDATE_EMPLOYER_PROFILE_ACCEPT_SUCCESS } from "../actions/systemPersonnelUserActions";
import { GET_EMPLOYERS_ACTIVE_ERROR, GET_EMPLOYERS_ACTIVE_SUCCESS, GET_EMPLOYERS_PASSIVE_ERROR, GET_EMPLOYERS_PASSIVE_SUCCESS, GET_EMPLOYERS_REJECTED_ERROR, GET_EMPLOYERS_REJECTED_SUCCESS, GET_EMPLOYERS_UPDATE_ERROR, GET_EMPLOYERS_UPDATE_SUCCESS, GET_EMPLOYERS_WAITING_APPROVAL_ERROR, GET_EMPLOYERS_WAITING_APPROVAL_SUCCESS, GET_EMPLOYER_BY_ID_ERROR, GET_EMPLOYER_BY_ID_SUCCESS, GET_JOBSEEKERS_ERROR, GET_JOBSEEKERS_SUCCESS, UPDATE_EMPLOYER_ERROR, UPDATE_EMPLOYER_SUCCESS } from "../actions/userAction";
import { activeEmployers, jobSeekers, message, passiveEmployers, rejectedEmployers, updateEmployers, user, waitingApprovalEmployers } from "../initialValues/user";

const initState = {
    user:user,
    updateEmployers:updateEmployers,
    activeEmployers:activeEmployers,
    passiveEmployers:passiveEmployers,
    rejectedEmployers:rejectedEmployers,
    waitingApprovalEmployers:waitingApprovalEmployers,
    jobSeekers:jobSeekers,
    message:message
}

export default function userReducer (state = initState,{type,payload}) {
    switch (type) {
        case UPDATE_EMPLOYER_PROFILE_ACCEPT_SUCCESS:
            return {
                ...state,
                user:payload,
                updateEmployers:state.updateEmployers.filter(e => e.id !== payload.id)
            }
        case UPDATE_EMPLOYER_PROFILE_ACCEPT_ERROR:
            return {
                ...state,
                message:payload
            }
        case UPDATE_EMPLOYER_SUCCESS:
            console.log(payload,"pay")
            return {
                ...state,
                updateEmployers:[payload,...state.updateEmployers]
            }
        case UPDATE_EMPLOYER_ERROR:
            return {
                ...state,
                message:payload
            }
        case GET_EMPLOYERS_UPDATE_SUCCESS:
            return {
                ...state,
                updateEmployers:payload
            }
        case GET_EMPLOYERS_UPDATE_ERROR:
            return {
                ...state,
                message:payload
            }
        case GET_EMPLOYER_BY_ID_SUCCESS:
            return {
                ...state,
                user:payload
            }
        case GET_EMPLOYER_BY_ID_ERROR:
            return {
                ...state,
                message:payload
            }
        case GET_EMPLOYERS_ACTIVE_SUCCESS:
            return {
                ...state,
                activeEmployers:payload
            }
        case GET_EMPLOYERS_ACTIVE_ERROR:
            return {
                ...state,
                message:payload
            }
        case GET_EMPLOYERS_PASSIVE_SUCCESS:
            return {
                ...state,
                passiveEmployers:payload
            }
        case GET_EMPLOYERS_PASSIVE_ERROR:
            return {
                ...state,
                message:payload
            }
        case GET_EMPLOYERS_WAITING_APPROVAL_SUCCESS:
            return {
                ...state,
                waitingApprovalEmployers:payload
            }
        case GET_EMPLOYERS_WAITING_APPROVAL_ERROR:
            return {
                ...state,
                message:payload
            }
        case GET_EMPLOYERS_REJECTED_SUCCESS:
            return {
                ...state,
                rejectedEmployers:payload
            }
        case GET_EMPLOYERS_REJECTED_ERROR:
            return {
                ...state,
                message:payload
            }
        case GET_JOBSEEKERS_SUCCESS:
        return {
            ...state,
            jobSeekers:payload
        }
    case GET_JOBSEEKERS_ERROR:
        return {
            ...state,
            message:payload
        }
    case EMPLOYER_ACTIVE_SUCCESS:
        return {
            ...state,
            activeEmployers:[payload,...state.activeEmployers],
            waitingApprovalEmployers:state.waitingApprovalEmployers.filter(e => e.id !== payload.id),
            passiveEmployers:state.passiveEmployers.filter(e => e.id !== payload.id)
        }
    case EMPLOYER_ACTIVE_ERROR:
        return {
            ...state,
            message:payload
        }
    case EMPLOYER_PASSIVE_SUCCESS:
        return {
            ...state,
            activeEmployers:state.activeEmployers.filter(e => e.id !== payload.id),
            passiveEmployers:[payload,...state.passiveEmployers]
        }
    case EMPLOYER_PASSIVE_ERROR:
        return {
            ...state,
            message:payload
        }
    case EMPLOYER_REJECTED_SUCCESS:
    return {
        ...state,
        waitingApprovalEmployers:state.waitingApprovalEmployers.filter(e => e.id !== payload.id),
        rejectedEmployers:[payload,...state.rejectedEmployers]
    }
    case EMPLOYER_REJECTED_ERROR:
        return {
            ...state,
            message:payload
        }
        default:
            return state;
    }


}