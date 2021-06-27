import { combineReducers } from "redux";
import educationReducer from "./reducers/educationReducer";
import postReducer from "./reducers/postReducer";
import userReducer from "./reducers/userReducer";
import systemPersonnelReducer from "./reducers/systemPersonnelReducer";

const rootReducer = combineReducers({
    posts:postReducer,
    users:userReducer,
    educations:educationReducer,
    personnels:systemPersonnelReducer
})

export default rootReducer;