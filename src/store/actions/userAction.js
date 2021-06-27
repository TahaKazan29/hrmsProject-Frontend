import EmployerService from "../../services/Employer/employerService";
import JobSeekerService from "../../services/JobSeeker/jobSeekerService";
import FavoritePostService from "../../services/Post/favoritePostService";

export const GET_EMPLOYERS_ACTIVE_SUCCESS = "GET_EMPLOYERS_ACTIVE_SUCCESS"; 
export const GET_EMPLOYERS_ACTIVE_ERROR = "GET_EMPLOYERS_ACTIVE_ERROR";
export const GET_EMPLOYERS_PASSIVE_SUCCESS = "GET_EMPLOYERS_PASSIVE_SUCCESS"; 
export const GET_EMPLOYERS_PASSIVE_ERROR = "GET_EMPLOYERS_PASSIVE_ERROR";
export const GET_EMPLOYERS_WAITING_APPROVAL_SUCCESS = "GET_EMPLOYERS_WAITING_APPROVAL_SUCCESS"; 
export const GET_EMPLOYERS_WAITING_APPROVAL_ERROR = "GET_EMPLOYERS_WAITING_APPROVAL_ERROR";
export const GET_EMPLOYERS_REJECTED_SUCCESS = "GET_EMPLOYERS_REJECTED_SUCCESS"; 
export const GET_EMPLOYERS_REJECTED_ERROR = "GET_EMPLOYERS_REJECTED_ERROR";
export const GET_EMPLOYER_BY_ID_SUCCESS = "GET_EMPLOYER_BY_ID_SUCCESS"; 
export const GET_EMPLOYER_BY_ID_ERROR = "GET_EMPLOYER_BY_ID_ERROR";
export const GET_JOBSEEKERS_SUCCESS = "GET_JOBSEEKERS_SUCCESS"; 
export const GET_JOBSEEKERS_ERROR = "GET_JOBSEEKERS_ERROR";
export const GET_EMPLOYERS_UPDATE_SUCCESS = "GET_EMPLOYERS_UPDATE_SUCCESS";
export const GET_EMPLOYERS_UPDATE_ERROR = "GET_EMPLOYERS_UPDATE_ERROR";
export const UPDATE_EMPLOYER_SUCCESS = "UPDATE_EMPLOYER_SUCCESS"; 
export const UPDATE_EMPLOYER_ERROR = "UPDATE_EMPLOYER_ERROR";
export const ADD_FAVORITE_POST_SUCCESS = "ADD_FAVORITE_POST_SUCCESS"; 
export const ADD_FAVORITE_POST_ERROR = "ADD_FAVORITE_POST_ERROR";
export const DELETE_FAVORITE_POST_SUCCESS = "DELETE_FAVORITE_POST_SUCCESS"; 
export const DELETE_FAVORITE_POST_ERROR = "DELETE_FAVORITE_POST_ERROR";

let employerService = new EmployerService();
let favoritePostService = new FavoritePostService();

export const addFavoritePost = (favoritePostDto) => async (dispatch) => {
  await favoritePostService.add(favoritePostDto).then((res) => {
    dispatch({
      type: ADD_FAVORITE_POST_SUCCESS,
      payload:res.data.data,
    });
  }).catch(error => {
    dispatch({
      type: ADD_FAVORITE_POST_ERROR,
      payload: error,
    });
  });
};

export const deleteFavoritePost = (id) => async (dispatch) => {
  await favoritePostService.delete(id).then((res) => {
    dispatch({
      type: DELETE_FAVORITE_POST_SUCCESS,
      payload:res.data.data,
    })
  }).catch(error => {
    dispatch({
      type: DELETE_FAVORITE_POST_ERROR,
      payload: error,
    })
  });
};

export const updateEmployer = (employer) => async (dispatch) => {
  await employerService.updateProfile(employer).then((res) => {
    dispatch({
      type: UPDATE_EMPLOYER_SUCCESS,
      payload:res.data.data,
    });
  }).catch(error => {
    dispatch({
      type: UPDATE_EMPLOYER_ERROR,
      payload: error,
    });
  });
};

export const getEmployerById = (id) => async (dispatch) => {
  await employerService.getById(id).then((res) => {
    dispatch({
      type: GET_EMPLOYER_BY_ID_SUCCESS,
      payload:res.data.data,
    });
  }).catch(error => {
    dispatch({
      type: GET_EMPLOYER_BY_ID_ERROR,
      payload: error,
    });
  });
};

export const getEmployersUpdate= () => async (dispatch) => {
  await employerService.getAllUpdateProfile().then((res) => {
    dispatch({
      type: GET_EMPLOYERS_UPDATE_SUCCESS,
      payload:res.data.data,
    });
  }).catch(error => {
    dispatch({
      type: GET_EMPLOYERS_UPDATE_ERROR,
      payload: error,
    });
  });
};

export const getEmployersActive = () => async (dispatch) => {
    await employerService.getAllActives().then((res) => {
      dispatch({
        type: GET_EMPLOYERS_ACTIVE_SUCCESS,
        payload:res.data.data,
      });
    }).catch(error => {
      dispatch({
        type: GET_EMPLOYERS_ACTIVE_ERROR,
        payload: error,
      });
    });
};

export const getEmployersPassive = () => async (dispatch) => {
    await employerService.getAllPassive().then((res) => {
      dispatch({
        type: GET_EMPLOYERS_PASSIVE_SUCCESS,
        payload:res.data.data,
      });
    }).catch(error => {
      dispatch({
        type: GET_EMPLOYERS_PASSIVE_ERROR,
        payload: error,
      });
    });
};

export const getEmployersReject = () => async (dispatch) => {
    await employerService.getAllRejected().then((res) => {
      dispatch({
        type: GET_EMPLOYERS_REJECTED_SUCCESS,
        payload:res.data.data,
      });
    }).catch(error => {
      dispatch({
        type: GET_EMPLOYERS_REJECTED_ERROR,
        payload: error,
      });
    });
};

export const getEmployersWaitingApproval = () => async (dispatch) => {
    await employerService.getAllWaitingApproval().then((res) => {
      dispatch({
        type: GET_EMPLOYERS_WAITING_APPROVAL_SUCCESS,
        payload:res.data.data,
      });
    }).catch(error => {
      dispatch({
        type: GET_EMPLOYERS_WAITING_APPROVAL_ERROR,
        payload: error,
      });
    });
};

export const getJobSeekers = () => async (dispatch) => {
    let jobSeekerService = new JobSeekerService();
    await jobSeekerService.getAll().then((res) => {
      dispatch({
        type: GET_JOBSEEKERS_SUCCESS,
        payload:res.data.data,
      });
    }).catch(error => {
      dispatch({
        type: GET_JOBSEEKERS_ERROR,
        payload: error,
      });
    });
};