import JobPostService from "../../services/Post/jobPostService";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"; 
export const GET_POSTS_ERROR = "GET_POSTS_ERROR";
export const GET_POSTS_ACTIVE_SUCCESS = "GET_POSTS_ACTIVE_SUCCESS"; 
export const GET_POSTS_ACTIVE_ERROR = "GET_POSTS_ACTIVE_ERROR";
export const GET_POSTS_WAITING_APPROVAL_SUCCESS = "GET_POSTS_WAITING_APPROVAL_SUCCESS";
export const GET_POSTS_WAITING_APPROVAL_ERROR = "GET_POSTS_WAITING_APPROVAL_ERROR";
export const GET_POSTS_PASSIVE_SUCCESS = "GET_POSTS_PASSIVE_SUCCESS";
export const GET_POSTS_PASSIVE_ERROR = "GET_POSTS_PASSIVE_ERROR";
export const GET_POSTS_EXPIRED_SUCCESS = "GET_POSTS_EXPIRED_SUCCESS";
export const GET_POSTS_EXPIRED_ERROR = "GET_POSTS_EXPIRED_ERROR";
export const GET_POSTS_REJECTED_SUCCESS = "GET_POSTS_REJECTED_SUCCESS";
export const GET_POSTS_REJECTED_ERROR = "GET_POSTS_REJECTED_ERROR";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_ERROR = "ADD_POST_ERROR";
export const GET_POST_BY_DETAIL_SUCCESS = "GET_POST_BY_DETAIL_SUCCESS";
export const GET_POST_BY_DETAIL_ERROR = "GET_POST_BY_DETAIL_ERROR";
export const GET_POSTS_FILTER_SUCCESS = "GET_POSTS_FILTER_SUCCESS";
export const GET_POSTS_FILTER_ERROR = "GET_POSTS_FILTER_ERROR";
export const ADD_CITY_TO_FILTER_SUCCESS = "ADD_CITY_TO_FILTER_SUCCESS";
export const ADD_POSITION_TO_FILTER_SUCCESS = "ADD_POSITION_TO_FILTER_SUCCESS";
export const ADD_WAY_OF_WORKING_TO_FILTER_SUCCESS = "ADD_WAY_OF_WORKING_TO_FILTER_SUCCESS";
export const ADD_WORKING_TIMES_TO_FILTER_SUCCESS = "ADD_WORKING_TIMES_TO_FILTER_SUCCESS";

let postService = new JobPostService();

export function addCityToFilter(cities){
  return {
      type: ADD_CITY_TO_FILTER_SUCCESS,
      payload: cities
  }
}

export function addPositionToFilter(positions){
  return {
      type: ADD_POSITION_TO_FILTER_SUCCESS,
      payload: positions
  }
}

export function addWayOfWorkingToFilter(waysOfWorking){
  return {
      type: ADD_WAY_OF_WORKING_TO_FILTER_SUCCESS,
      payload: waysOfWorking
  }
}

export function addWorkingTimeToFilter(workingTimes){
  return {
      type: ADD_WORKING_TIMES_TO_FILTER_SUCCESS,
      payload: workingTimes
  }
}

export const getPostsFilter = (filter,pageNumber) => async (dispatch) => {
  await postService.getFilter(filter,pageNumber).then((res) => {
    dispatch({
      type: GET_POSTS_FILTER_SUCCESS,
      payload:res.data.data,
    });
  }).catch(error => {
    dispatch({
      type: GET_POSTS_FILTER_ERROR,
      payload: error,
    });
  });
};

export const getPosts = () => async (dispatch) => {
  await postService.getAll().then((res) => {
    dispatch({
      type: GET_POSTS_SUCCESS,
      payload:res.data.data,
    });
  }).catch(error => {
    dispatch({
      type: GET_POSTS_ERROR,
      payload: error,
    });
  });
};

export const getPostsActive = () => async (dispatch) => {
    await postService.getPosts().then((res) => {
      dispatch({
        type: GET_POSTS_ACTIVE_SUCCESS,
        payload:res.data.data,
      });
    }).catch(error => {
      dispatch({
        type: GET_POSTS_ACTIVE_ERROR,
        payload: error,
      });
    });
};

export const getPostsWaitingApproval = () => async (dispatch) => {
    await postService.getAllIsWaitingApproval().then((res) => {
      dispatch({
        type: GET_POSTS_WAITING_APPROVAL_SUCCESS,
        payload:res.data.data,
      });
    }).catch(error => {
      dispatch({
        type: GET_POSTS_WAITING_APPROVAL_ERROR,
        payload: error,
      });
    });
};

export const getPostsPassive = () => async (dispatch) => {
  await postService.getAllIsPassive().then((res) => {
    dispatch({
      type: GET_POSTS_PASSIVE_SUCCESS,
      payload:res.data.data,
    });
  }).catch(error => {
    dispatch({
      type: GET_POSTS_PASSIVE_ERROR,
      payload: error,
    });
  });
};

export const getPostsRejected = () => async (dispatch) => {
  await postService.getAllIsRejected().then((res) => {
    dispatch({
      type: GET_POSTS_REJECTED_SUCCESS,
      payload:res.data.data,
    });
  }).catch(error => {
    dispatch({
      type: GET_POSTS_REJECTED_ERROR,
      payload: error,
    });
  });
};

export const getPostsExpired = () => async (dispatch) => {
  await postService.getAllIsExpired().then((res) => {
    dispatch({
      type: GET_POSTS_EXPIRED_SUCCESS,
      payload:res.data.data,
    });
  }).catch(error => {
    dispatch({
      type: GET_POSTS_EXPIRED_ERROR,
      payload: error,
    });
  });
};

export const getPostByDetail = (postId) => async (dispatch) => {
  await postService.getByPostDetail(postId).then((res) => {
    dispatch({
      type: GET_POST_BY_DETAIL_SUCCESS,
      payload:res.data.data,
    });
  }).catch(error => {
    dispatch({
      type: GET_POST_BY_DETAIL_ERROR,
      payload: error,
    });
  });
};

export const addPost = (post) => async (dispatch) => {
      await postService.add(post).then((res) => {
        dispatch({
          type: ADD_POST_SUCCESS,
          payload:res.data.data,
        });
      }).catch(error => {
        dispatch({
          type: ADD_POST_ERROR,
          payload: error,
        });
      });
  };




