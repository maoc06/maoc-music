import {
    ADD_FAVORITE_SONG,
    REMOVE_FAVORITE_SONG,
} from "../../core/constants/action-types";

const initialState = {
    favoritesSongs: [],
};

export default function setFavorites(state = initialState, action) {
    switch (action.type) {
        case ADD_FAVORITE_SONG:
            return {
                ...state,
                favoritesSongs: [...state.favoritesSongs, action.payload],
            };
        case REMOVE_FAVORITE_SONG:
            return {
                ...state,
                favoritesSongs: action.payload,
            };
        default:
            return state;
    }
}