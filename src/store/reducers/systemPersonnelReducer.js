import { GET_PERSONNEL_BY_ID_ERROR, GET_PERSONNEL_BY_ID_SUCCESS, UPDATE_PERSONNEL_ERROR, UPDATE_PERSONNEL_SUCCESS } from "../actions/systemPersonnelAction";
import {message, personnel} from '../initialValues/systemPersonnel'

const initState = {
    personnel:personnel,
    message:message
}

export default function systemPersonnelReducer (state = initState,{type,payload}) {
    switch (type) {
        case GET_PERSONNEL_BY_ID_SUCCESS:
            return {
                ...state,
                personnel:payload
            }
        case GET_PERSONNEL_BY_ID_ERROR:
            return {
                ...state,
                message:payload
            }
        case UPDATE_PERSONNEL_SUCCESS:
            return {
                ...state,
                personnel:payload
            }
        case UPDATE_PERSONNEL_ERROR:
            return {
                ...state,
                message:payload
            }
        default:
            return state;
    }
}