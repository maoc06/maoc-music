import {
    GET_TOP_ARTISTS_LOADING,
    GET_TOP_ARTISTS_SUCCESS,
    GET_TOP_ARTISTS_ERROR,
} from "../../core/constants/action-types";

const initialState = {
    loading: true,
    top: [],
    error: null,
};

export default function artists(state = initialState, action) {
    switch (action.type) {
        case GET_TOP_ARTISTS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_TOP_ARTISTS_SUCCESS:
            return {
                ...state,
                loading: false,
                top: action.payload,
            };
        case GET_TOP_ARTISTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}