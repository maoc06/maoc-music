import {
    SEARCH_TRACKS_LOADING,
    SEARCH_TRACKS_SUCCESS,
    SEARCH_TRACKS_ERROR,
} from "../../core/constants/action-types";

const initialState = {
    loading: true,
    tracks: {},
    error: null,
};

export default function searchTracks(state = initialState, action) {
    switch (action.type) {
        case SEARCH_TRACKS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case SEARCH_TRACKS_SUCCESS:
            return {
                ...state,
                loading: false,
                tracks: action.payload,
            };
        case SEARCH_TRACKS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}