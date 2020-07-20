import {
    GET_GENRES_LOADING,
    GET_GENRES_SUCCESS,
    GET_GENRES_ERROR,
} from "../../core/constants/action-types";

const initialState = {
    loading: true,
    genres: {},
    error: null,
};

export default function genres(state = initialState, action) {
    switch (action.type) {
        case GET_GENRES_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_GENRES_SUCCESS:
            return {
                ...state,
                loading: false,
                genres: action.payload,
            };
        case GET_GENRES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}