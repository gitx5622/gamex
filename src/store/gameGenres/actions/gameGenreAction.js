import axios from "axios";
import API_ROUTE from "../../../utils/constants";
import { history } from "../../../utils/history";
import { BEFORE_STATE, FILTER_GAME_GENRES_ERROR, FILTER_GAME_GENRES_SUCCESS } from "../actionTypes";


export const filterGamesByGenreID = (id) => {
    return async(dispatch) => {
        dispatch({type: BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/genres?genre_id=${id}`)
            dispatch({type: FILTER_GAME_GENRES_SUCCESS, payload: res.data.games})
        }catch(err){
            dispatch({type: FILTER_GAME_GENRES_ERROR, payload: err.error})
            history.push("/");
        }
    }
};

export const filterGames= () => {
    return async(dispatch) => {
        dispatch({type: BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/games`)
            dispatch({type: FILTER_GAME_GENRES_SUCCESS, payload: res.data.games})
        }catch(err){
            dispatch({type: FILTER_GAME_GENRES_ERROR, payload: err.error})
            history.push("/");
        }
    }
};