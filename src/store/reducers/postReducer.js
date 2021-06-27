import { ADD_CITY_TO_FILTER_SUCCESS, ADD_POSITION_TO_FILTER_SUCCESS, ADD_POST_ERROR, ADD_POST_SUCCESS, ADD_WAY_OF_WORKING_TO_FILTER_SUCCESS, ADD_WORKING_TIMES_TO_FILTER_SUCCESS, GET_POSTS_ACTIVE_ERROR, GET_POSTS_ACTIVE_SUCCESS, GET_POSTS_ERROR, GET_POSTS_EXPIRED_ERROR, GET_POSTS_EXPIRED_SUCCESS, GET_POSTS_FILTER_ERROR, GET_POSTS_FILTER_SUCCESS, GET_POSTS_PASSIVE_ERROR, GET_POSTS_PASSIVE_SUCCESS, GET_POSTS_REJECTED_ERROR, GET_POSTS_REJECTED_SUCCESS, GET_POSTS_SUCCESS, GET_POSTS_WAITING_APPROVAL_ERROR, GET_POSTS_WAITING_APPROVAL_SUCCESS, GET_POST_BY_DETAIL_ERROR, GET_POST_BY_DETAIL_SUCCESS, } from '../actions/postActions';
import { POST_ACTIVE_ERROR, POST_ACTIVE_SUCCESS, POST_PASSIVE_ERROR, POST_PASSIVE_SUCCESS, POST_REJECTED_ERROR, POST_REJECTED_SUCCESS } from '../actions/systemPersonnelPostActions';
import { ADD_FAVORITE_POST_ERROR, ADD_FAVORITE_POST_SUCCESS, DELETE_FAVORITE_POST_ERROR, DELETE_FAVORITE_POST_SUCCESS } from '../actions/userAction';
import {cityIds, filterElements, message, positionIds, post, postsActive, postsAll, postsExpired, postsFavorite, postsFilter, postsPassive, postsRejected, postsWaitingApproval, wayOfWorkingIds, workingTimeIds} from '../initialValues/post'

const initState = {
    filterElements:filterElements,
    cityIds:cityIds,
    workingTimeIds:workingTimeIds,
    wayOfWorkingIds:wayOfWorkingIds,
    positionIds:positionIds,
    post:post,
    postsFavorite:postsFavorite,
    postsAll:postsAll,
    postsFilter: postsFilter,
    postsActive:postsActive,
    postsWaitingApproval: postsWaitingApproval,
    postsPassive: postsPassive,
    postsExpired: postsExpired,
    postsRejected: postsRejected,
    message:message
}

export default function postReducer(state=initState,{type,payload}){
       let cityIds = state.cityIds.length != 0 ? state.cityIds : null;
       let positionIds = state.positionIds.length != 0 ? state.positionIds : null;
       let wayOfWorkingIds = state.wayOfWorkingIds.length != 0 ? state.wayOfWorkingIds : null;
       let workingTimeIds = state.workingTimeIds.length != 0 ? state.wayOfWorkingIds : null;
    switch (type) {
        case ADD_CITY_TO_FILTER_SUCCESS:
            return {
                ...state,
                cityIds:[payload,...state.cityIds],
                filterElements:{positionIds,wayOfWorkingIds,workingTimeIds,cityIds:[payload,...state.cityIds]}
            }
        case ADD_POSITION_TO_FILTER_SUCCESS:
            return {
                ...state,
                positionIds:[payload,...state.positionIds],
                filterElements:{cityIds,wayOfWorkingIds,workingTimeIds,positionIds:[payload,...state.positionIds]}
            }
        case ADD_WAY_OF_WORKING_TO_FILTER_SUCCESS:
            return {
                ...state,
                wayOfWorkingIds:[payload,...state.wayOfWorkingIds],
                filterElements:{cityIds,positionIds,workingTimeIds,wayOfWorkingIds:[payload,...state.wayOfWorkingIds]}
            }
        case ADD_WORKING_TIMES_TO_FILTER_SUCCESS:
            return {
                ...state,
                wayOfWorkingIds:[payload,...state.wayOfWorkingIds],
                filterElements:{cityIds,positionIds,wayOfWorkingIds,workingTimeIds:[payload,...state.workingTimeIds]}
            }
        case GET_POSTS_FILTER_SUCCESS:
            return {
                ...state,
                postsFilter:payload,
            }
        case GET_POSTS_FILTER_ERROR:
            return {
                ...state,
                message:payload
            }
        case ADD_FAVORITE_POST_SUCCESS:
            return {
                ...state,
                postsFavorite:[payload,...state.postsFavorite]
            }
        case ADD_FAVORITE_POST_ERROR:
            return {
                ...state,
                message:payload
            }
        case DELETE_FAVORITE_POST_SUCCESS:
        return {
            ...state,
            postsFavorite:state.postsFavorite.filter(p => p.id !== payload.id)
        }
        case DELETE_FAVORITE_POST_ERROR:
            return {
                ...state,
                message:payload
            }
        case ADD_POST_SUCCESS:
            return {
                ...state,
                postsWaitingApproval:[payload,...state.postsWaitingApproval],
            }
        case ADD_POST_ERROR:
            return {
                ...state,
                message:payload
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                postsAll:payload
            };
        case GET_POSTS_ERROR:
            return {
                    ...state,
                message:payload
            };
        case GET_POSTS_ACTIVE_SUCCESS:
            return {
                 ...state,
                 postsActive:payload,
            };
        case GET_POSTS_ACTIVE_ERROR:
            return {
                    ...state,
                message:payload
            };
        case GET_POSTS_WAITING_APPROVAL_SUCCESS:
            return {
                ...state,
                postsWaitingApproval:payload
            };
        case GET_POSTS_WAITING_APPROVAL_ERROR:
            return {
                ...state,
                message:payload
            };
        case GET_POSTS_PASSIVE_SUCCESS:
            return {
                ...state,
                postsPassive:payload
            };
        case GET_POSTS_PASSIVE_ERROR:
            return {
                ...state,
                message:payload
            };
        case GET_POSTS_EXPIRED_SUCCESS:
            return {
                ...state,
                postsExpired:payload
            };
        case GET_POSTS_EXPIRED_ERROR:
            return {
                ...state,
                message:payload
            };
        case GET_POSTS_REJECTED_SUCCESS:
            return {
                ...state,
                postsRejected:payload
            };
        case GET_POSTS_REJECTED_ERROR:
            return {
                ...state,
                message:payload
            };
        case GET_POST_BY_DETAIL_SUCCESS :
            return {
                ...state,
                post:payload
            };
        case GET_POST_BY_DETAIL_ERROR:
            return {
                ...state,
                message:payload
            };
        case POST_ACTIVE_SUCCESS:
            let activePost = state.postsAll.find(p => p.id === payload.id)
            if(activePost){
                activePost.status = "ACTIVE"
            }
            return {
                ...state,
                post:payload,
                postsActive:[payload,...state.postsActive],
                postsWaitingApproval:state.postsWaitingApproval.filter(p => p.id !== payload.id),
                postsPassive:state.postsPassive.filter(p => p.id !== payload.id)
            }
        case POST_ACTIVE_ERROR:
            return {
                ...state,
                message:payload
            }
        case POST_PASSIVE_SUCCESS:
            let passivePost = state.postsAll.find(p => p.id === payload.id)
            if(passivePost){
                passivePost.status = "PASSIVE"
            }
            return {
                ...state,
                post:payload,
                postsPassive:[payload,...state.postsPassive],
                postsActive:state.postsActive.filter(p => p.id !== payload.id)
            }
        case POST_PASSIVE_ERROR:
            return {
                ...state,
                message:payload
            }
        case POST_REJECTED_SUCCESS:
            let rejectPost = state.postsAll.find(p => p.id === payload.id)
            if(rejectPost){
                rejectPost.status = "REJECTED"
            }
            return {
                ...state,
                post:payload,
                postsRejected:[payload,...state.postsRejected],
            }
        case POST_REJECTED_ERROR:
            return {
                ...state,
                message:payload
            }
        default:
            return state;
    }

    
}