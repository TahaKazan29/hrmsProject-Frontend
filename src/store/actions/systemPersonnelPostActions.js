import SystemPersonnelService from "../../services/SystemPersonnel/systemPersonelService";

export const POST_ACTIVE_SUCCESS = "POST_ACTIVE_SUCCESS"; 
export const POST_ACTIVE_ERROR = "POST_ACTIVE_ERROR";
export const POST_PASSIVE_SUCCESS = "POST_PASSIVE_SUCCESS"; 
export const POST_PASSIVE_ERROR = "POST_PASSIVE_ERROR";
export const POST_REJECTED_SUCCESS = "POST_REJECTED_SUCCESS"; 
export const POST_REJECTED_ERROR = "POST_REJECTED_ERROR";

let systemPersonnelService = new SystemPersonnelService();

export const activatePost = (postId) => async (dispatch) => {
    await systemPersonnelService.activatePost(postId).then((res) => {
      dispatch({
        type: POST_ACTIVE_SUCCESS,
        payload:res.data.data,
      });
    }).catch(error => {
      dispatch({
        type: POST_ACTIVE_ERROR,
        payload: error,
      });
    });
};

export const passivatePost = (postId) => async (dispatch) => {
    await systemPersonnelService.passivePost(postId).then((res) => {
      dispatch({
        type: POST_PASSIVE_SUCCESS,
        payload:res.data.data,
      });
    }).catch(error => {
      dispatch({
        type: POST_PASSIVE_ERROR,
        payload: error,
      });
    });
};

export const rejectPost = (postId) => async (dispatch) => {
    await systemPersonnelService.rejectPost(postId).then((res) => {
      dispatch({
        type: POST_REJECTED_SUCCESS,
        payload:res.data.data,
      });
    }).catch(error => {
      dispatch({
        type: POST_REJECTED_ERROR,
        payload: error,
      });
    });
};