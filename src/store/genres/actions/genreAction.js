import axios from "axios";
import API_ROUTE from "../../../utils/constants";
import { history } from "../../../utils/history";
import { BEFORE_STATE, FETCH_GENRES_SUCCESS, FETCH_GENRES_ERROR, FETCH_GENRE_SUCCESS,
    FETCH_GENRE_ERROR, CREATE_GENRE_SUCCESS, CREATE_GENRE_ERROR } from "../actionTypes/index";

export const fetchGenres = () => {
    return async(dispatch) => {
        dispatch({type: BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/genres`);
            console.log(res);
            dispatch({type: FETCH_GENRES_SUCCESS, payload: res.data})
        }catch(err) {
            dispatch({type: FETCH_GENRES_ERROR, payload: err.error})
        }
    }
};

export const createGenre = (createGenre) => {
    return async(dispatch) => {
        dispatch({type: BEFORE_STATE});
        try {
            const res = await axios.post(`${API_ROUTE}/genres`, createGenre)
            dispatch({type: CREATE_GENRE_SUCCESS, payload: res.data})
        }catch(err){
            dispatch({type: CREATE_GENRE_ERROR, payload: err.error})
            history.push("/");
        }

    }

}

export const fetchGenre = (id) => {
    return async(dispatch) => {
        dispatch({type: BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/genres/${id}`)
            dispatch({type: FETCH_GENRE_SUCCESS, payload: res.data && res.status})
        }catch(err){
            dispatch({type: FETCH_GENRE_ERROR, payload: err.error})
            history.push("/");
        }
    }
};