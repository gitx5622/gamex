import { combineReducers } from "redux"
import authReducer from "../auth/reducers/authReducer";
import { genresState } from "../genres/reducer/genreReducer";

const reducer = combineReducers({
    Auth: authReducer,
    Genre: genresState,
});

export default reducer
