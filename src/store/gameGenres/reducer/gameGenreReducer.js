import { BEFORE_STATE, FILTER_GAME_GENRES_SUCCESS, FILTER_GAME_GENRES_ERROR } from "../actionTypes"

export const initialState = {
    gameGenres: [],
    selectedGenre: null,
    isLoading: false,
    gameGenresError: null
}

export const gameGenresState = (state = initialState, action) => {
    const { payload, type } = action
    switch(type) {
        case BEFORE_STATE:
            return {
                ...state,
                genresError: null,
                isLoading: true
            }
        case FILTER_GAME_GENRES_SUCCESS:
            return {
                ...state,
                genres: payload,
                isLoading: false
            }
        case FILTER_GAME_GENRES_ERROR:
            return {
                ...state,
                genresError: payload,
                isLoading: false
            }
        default:
            return state
    }

}