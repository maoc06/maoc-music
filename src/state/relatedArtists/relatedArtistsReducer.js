import {
    GET_RELATED_ARTISTS_LOADING,
    GET_RELATED_ARTISTS_SUCCESS,
    GET_RELATED_ARTISTS_ERROR,
} from "../../core/constants/action-types";

const initialState = {
    loading: true,
    related: {},
    error: null,
};

export default function relatedArtists(state = initialState, action) {
    switch (action.type) {
        case GET_RELATED_ARTISTS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_RELATED_ARTISTS_SUCCESS:
            return {
                ...state,
                loading: false,
                related: action.payload,
            };
        case GET_RELATED_ARTISTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}