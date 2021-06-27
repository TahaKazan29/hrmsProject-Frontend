import FaculityService from "../../services/Resume/faculityService";
import SectionService from "../../services/Resume/sectionService";

// export const GET_UNIVERSITY_ID_SUCCESS = "GET_UNIVERSITY_ID_SUCCESS"; 
// export const GET_UNIVERSITY_ID_ERROR = "GET_UNIVERSITY_ID_ERROR"; 
// export const CHANGE_UNIVERSITY_ID_SUCCESS = "CHANGE_UNIVERSITY_ID_SUCCESS"; 
// export const CHANGE_UNIVERSITY_ID_ERROR = "CHANGE_UNIVERSITY_ID_ERROR"; 
export const GET_FACULITY_SUCCESS = "GET_FACULITY_SUCCESS"; 
export const GET_FACULITY_ERROR= "GET_FACULITY_ERROR";
export const GET_SECTION_SUCCESS = "GET_SECTION_SUCCESS"; 
export const GET_SECTION_ERROR= "GET_SECTION_ERROR"; 
export const GET_UNI_ID= "GET_UNI_ID"; 
// export const CHANGE_FACULITY_ID_ERROR = "CHANGE_FACULITY_ID_ERROR"; 

let faculityService = new FaculityService();
let sectionService = new SectionService();

// export function getUniId(id){
//     return {
//         type: GET_UNI_ID,
//         payload: id
//     }
// }


export const changeUniversityId = (id) => async (dispatch) => {
    await faculityService.getFaculities(id).then((res) => {
      dispatch({
        type: GET_FACULITY_SUCCESS,
        payload:res.data.data,
      });
    }).catch(error => {
      dispatch({
        type: GET_FACULITY_ERROR,
        payload: error,
      });
    });
};

export const changeFaculityId = (fucilityId,uniId) => async (dispatch) => {
    await sectionService.getSections(fucilityId,uniId).then((res) => {
      dispatch({
        type: GET_SECTION_SUCCESS,
        payload:res.data.data,
      });
    }).catch(error => {
      dispatch({
        type: GET_SECTION_ERROR,
        payload: error,
      });
    });
};

// export function getUniversityId(){
//     return {
//         type: GET_UNIVERSITY_ID_SUCCESS
//     }
// }
