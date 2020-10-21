import { combineReducers } from "redux"
import authReducer from "../auth/reducers/authReducer";

const reducer = combineReducers({
    Auth: authReducer,
});

export default reducer
