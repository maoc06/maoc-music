import {
    SEARCH_ARTISTS_LOADING,
    SEARCH_ARTISTS_SUCCESS,
    SEARCH_ARTISTS_ERROR,
} from "../../core/constants/action-types";

const initialState = {
    loading: true,
    artists: {},
    error: null,
};

export default function searchArtists(state = initialState, action) {
    switch (action.type) {
        case SEARCH_ARTISTS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case SEARCH_ARTISTS_SUCCESS:
            return {
                ...state,
                loading: false,
                artists: action.payload,
            };
        case SEARCH_ARTISTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}