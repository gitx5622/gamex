import { BEFORE_STATE, CREATE_GENRE_ERROR, CREATE_GENRE_SUCCESS, FETCH_GENRES_ERROR, FETCH_GENRES_SUCCESS, FETCH_GENRE_ERROR, FETCH_GENRE_SUCCESS, } from "../actionTypes"

export const initialState = {
    genres: [],
    genre: {},
    isLoading: false,
    genresError: null
}

export const genresState = (state = initialState, action) => {
    const { payload, type } = action
    switch(type) {
        case BEFORE_STATE:
            return {
                ...state,
                genresError: null,
                isLoading: true
            }
        case FETCH_GENRES_SUCCESS:
            return {
                ...state,
                genres: payload,
                isLoading: false
            }
        case FETCH_GENRES_ERROR:
            return {
                ...state,
                genresError: payload,
                isLoading: false
            }
        case FETCH_GENRE_SUCCESS:
            return {
                ...state,
                genre: payload,
                genresError: null,
                isLoading: false
            }
        case FETCH_GENRE_ERROR:
            return {
                ...state,
                genresError: payload,
                isLoading: false
            }
        case CREATE_GENRE_SUCCESS:
            return {
                ...state,
                genres: [payload, ...state.genres],
                genresError: null,
                isLoading: false
            }
        case CREATE_GENRE_ERROR:
            return {
                ...state,
                genresError: payload,
                isLoading: false
            }
        default:
            return state
    }

}