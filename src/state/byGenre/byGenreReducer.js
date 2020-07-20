import {
    GET_ARTISTS_BY_GENRE_LOADING,
    GET_ARTISTS_BY_GENRE_SUCCESS,
    GET_ARTISTS_BY_GENRE_ERROR,
} from "../../core/constants/action-types";

const initialState = {
    loading: true,
    artists: [],
    error: null,
};

export default function artistsByGenre(state = initialState, action) {
    switch (action.type) {
        case GET_ARTISTS_BY_GENRE_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_ARTISTS_BY_GENRE_SUCCESS:
            return {
                ...state,
                loading: false,
                artists: action.payload,
            };
        case GET_ARTISTS_BY_GENRE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}