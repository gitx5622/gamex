import axios from "axios";
import API_ROUTE from "../../../utils/constants";
import { history } from "../../../utils/history";
import { BEFORE_STATE, CREATE_GAME_ERROR, CREATE_GAME_SUCCESS, 
    FETCH_GAME_SUCCESS, FETCH_GAME_ERROR, FETCH_GAMES_ERROR, FETCH_GAMES_SUCCESS } from "../actionTypes";

export const fetchGames = () => {
    return async(dispatch) => {
        dispatch({type:BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/games`)
            dispatch({type: FETCH_GAMES_SUCCESS, payload: res.data.games})
        }catch (err) {
            dispatch({type: FETCH_GAMES_ERROR, payload: err.error})
        }
    }
}

export const createGame = (createGame) => {
    return async(dispatch) => {
        dispatch({type:BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/games`, createGame)
            dispatch({type: CREATE_GAME_SUCCESS, payload: res.data.games})
        }catch (err) {
            dispatch({type: CREATE_GAME_ERROR, payload: err.error })
            history.push("/");
        }
    }
}
export const getGame = (id) => {
    return async (dispatch) => {
        dispatch({type:BEFORE_STATE});
        try {
            const res = await axios.get(`${API_ROUTE}/games/${id}`)
            console.log(res.data);
            dispatch({type: FETCH_GAME_SUCCESS, payload: res.data})
        }catch (err) {
            dispatch({type: FETCH_GAME_ERROR, payload: err.error })
            history.push("/");
        }
    }
}