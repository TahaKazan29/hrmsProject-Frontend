import SystemPersonnelService from '../../services/SystemPersonnel/systemPersonelService'

export const UPDATE_PERSONNEL_SUCCESS = "UPDATE_PERSONNEL_SUCCESS"; 
export const UPDATE_PERSONNEL_ERROR = "UPDATE_PERSONNEL_ERROR";
export const GET_PERSONNEL_BY_ID_SUCCESS = "GET_PERSONNEL_BY_ID_SUCCESS"; 
export const GET_PERSONNEL_BY_ID_ERROR = "GET_PERSONNEL_BY_ID_ERROR";

let personnelService = new SystemPersonnelService();

export const getPersonnelById = (id) => async (dispatch) => {
    await personnelService.getById(id).then((res) => {
      dispatch({
        type: GET_PERSONNEL_BY_ID_SUCCESS,
        payload:res.data.data,
      });
    }).catch(error => {
      dispatch({
        type: GET_PERSONNEL_BY_ID_ERROR,
        payload: error,
      });
    });
  };

  export const updatePersonnel = (personnel) => async (dispatch) => {
    await personnelService.update(personnel).then((res) => {
      dispatch({
        type: UPDATE_PERSONNEL_SUCCESS,
        payload:res.data.data,
      });
    }).catch(error => {
      dispatch({
        type: UPDATE_PERSONNEL_ERROR,
        payload: error,
      });
    });
  };