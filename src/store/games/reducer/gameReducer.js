import { BEFORE_STATE, CREATE_GAME_ERROR, CREATE_GAME_SUCCESS, FETCH_GAMES_ERROR, FETCH_GAMES_SUCCESS, FETCH_GAME_ERROR, FETCH_GAME_SUCCESS, } from "../actionTypes"


export const initialState = {
    games: [],
    game : {},
    isLoading: false,
    gamesError: null
}

export const gamesState = (state = initialState, action) => {
    const { type, payload } = action
    switch(type){
        case BEFORE_STATE:
            return {
                ...state,
                gamesError: null,
                isLoading: true
            }
        case FETCH_GAMES_SUCCESS:
            return {
                ...state,
                games: payload,
                isLoading: false
            }
        case FETCH_GAMES_ERROR:
            return {
                ...state,
                gamesError: payload,
                isLoading: false
            }
        case FETCH_GAME_SUCCESS:
            return {
                ...state,
                game: payload,
                gamesError: null,
                isLoading: false
            }
        case FETCH_GAME_ERROR:
            return {
                ...state,
                gamesError: payload,
                isLoading: false
            }
        case CREATE_GAME_SUCCESS:
            return {
                ...state,
                games: [payload, ...state.games],
                gamesError: null,
                isLoading: false
            }
        case CREATE_GAME_ERROR:
            return {
                ...state,
                gamesError: payload,
                isLoading: false
            }
        default:
            return state
    }
}