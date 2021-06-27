import SystemPersonnelService from "../../services/SystemPersonnel/systemPersonelService"

export const EMPLOYER_ACTIVE_SUCCESS = "EMPLOYER_ACTIVE_SUCCESS"
export const EMPLOYER_ACTIVE_ERROR = "EMPLOYER_ACTIVE_ERROR"
export const EMPLOYER_PASSIVE_SUCCESS = "EMPLOYER_PASSIVE_SUCCESS"
export const EMPLOYER_PASSIVE_ERROR = "EMPLOYER_PASSIVE_ERROR"
export const EMPLOYER_REJECTED_SUCCESS = "EMPLOYER_REJECTED_SUCCESS"
export const EMPLOYER_REJECTED_ERROR = "EMPLOYER_REJECTED_ERROR"
export const UPDATE_EMPLOYER_PROFILE_ACCEPT_SUCCESS = "UPDATE_EMPLOYER_PROFILE_ACCEPT_SUCCESS"
export const UPDATE_EMPLOYER_PROFILE_ACCEPT_ERROR = "UPDATE_EMPLOYER_PROFILE_ACCEPT_ERROR"
export const UPDATE_EMPLOYER_PROFILE_REJECT_SUCCESS = "UPDATE_EMPLOYER_PROFILE_REJECT_SUCCESS"
export const UPDATE_EMPLOYER_PROFILE_REJECT_ERROR = "UPDATE_EMPLOYER_PROFILE_REJECT_ERROR"

let systemPersonnelService = new SystemPersonnelService();

export const updateEmployerProfileAccept = (employerId) => async (dispatch) => {
  await systemPersonnelService.updateEmployerProfileAccept(employerId).then((res) => {
    dispatch({
      type: UPDATE_EMPLOYER_PROFILE_ACCEPT_SUCCESS,
      payload:res.data.data,
    });
  }).catch(error => {
    dispatch({
      type: UPDATE_EMPLOYER_PROFILE_ACCEPT_ERROR,
      payload: error,
    });
  });
};

export const updateEmployerProfileReject = (employerId) => async (dispatch) => {
  await systemPersonnelService.updateEmployerProfileReject(employerId).then((res) => {
    dispatch({
      type: UPDATE_EMPLOYER_PROFILE_REJECT_SUCCESS,
      payload:res.data.data,
    });
  }).catch(error => {
    dispatch({
      type: UPDATE_EMPLOYER_PROFILE_REJECT_ERROR,
      payload: error,
    });
  });
};


export const activateEmployer = (employerId) => async (dispatch) => {
    await systemPersonnelService.activateEmployer(employerId).then((res) => {
      dispatch({
        type: EMPLOYER_ACTIVE_SUCCESS,
        payload:res.data.data,
      });
    }).catch(error => {
      dispatch({
        type: EMPLOYER_ACTIVE_ERROR,
        payload: error,
      });
    });
};

export const passiveEmployer = (employerId) => async (dispatch) => {
    await systemPersonnelService.passiveEmployer(employerId).then((res) => {
      dispatch({
        type: EMPLOYER_PASSIVE_SUCCESS,
        payload:res.data.data,
      });
    }).catch(error => {
      dispatch({
        type: EMPLOYER_PASSIVE_ERROR,
        payload: error,
      });
    });
};

export const rejectEmployer = (employerId) => async (dispatch) => {
    await systemPersonnelService.rejectEmployer(employerId).then((res) => {
      dispatch({
        type: EMPLOYER_REJECTED_SUCCESS,
        payload:res.data.data,
      });
    }).catch(error => {
      dispatch({
        type: EMPLOYER_REJECTED_ERROR,
        payload: error,
      });
    });
};
