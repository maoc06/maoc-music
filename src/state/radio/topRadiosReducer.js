import {
    GET_TOP_RADIOS_LOADING,
    GET_TOP_RADIOS_SUCCESS,
    GET_TOP_RADIOS_ERROR,
} from "../../core/constants/action-types";

const initialState = {
    loading: true,
    radios: {},
    error: null,
};

export default function topTopRadios(state = initialState, action) {
    switch (action.type) {
        case GET_TOP_RADIOS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_TOP_RADIOS_SUCCESS:
            return {
                ...state,
                loading: false,
                radios: action.payload,
            };
        case GET_TOP_RADIOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}