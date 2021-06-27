import {GET_FACULITY_SUCCESS,GET_SECTION_SUCCESS } from "../actions/educationActions";
import { faculities,sections } from "../initialValues/education";

const initState = {
    faculities:faculities,
    sections:sections
}

export default function educationReducer(state=initState,{type,payload}){
    switch (type) {
        case GET_FACULITY_SUCCESS:
            return {
                faculities:payload
            };
        case GET_SECTION_SUCCESS:
            return {
                sections:payload
            };
        default:
            return state;
    }
}