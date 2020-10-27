import { combineReducers } from "redux"
import authReducer from "../auth/reducers/authReducer";
import { genresState } from "../genres/reducer/genreReducer";
import { gamesState } from "../games/reducer/gameReducer";
import { gameGenresState } from "../gameGenres/reducer/gameGenreReducer";

const reducer = combineReducers({
    Auth: authReducer,
    Genre: genresState,
    Game: gamesState,
    GameGenres: gameGenresState
});

export default reducer
