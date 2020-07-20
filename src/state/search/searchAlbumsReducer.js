import {
    SEARCH_ALBUMS_LOADING,
    SEARCH_ALBUMS_SUCCESS,
    SEARCH_ALBUMS_ERROR,
} from "../../core/constants/action-types";

const initialState = {
    loading: true,
    albums: {},
    error: null,
};

export default function searchAlbums(state = initialState, action) {
    switch (action.type) {
        case SEARCH_ALBUMS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case SEARCH_ALBUMS_SUCCESS:
            return {
                ...state,
                loading: false,
                albums: action.payload,
            };
        case SEARCH_ALBUMS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}