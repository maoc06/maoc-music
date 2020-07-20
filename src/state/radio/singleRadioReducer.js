import {
    GET_RADIO_LOADING,
    GET_RADIO_SUCCESS,
    GET_RADIO_ERROR,
} from "../../core/constants/action-types";

const initialState = {
    loading: true,
    info: {},
    error: null,
};

export default function singleRadio(state = initialState, action) {
    switch (action.type) {
        case GET_RADIO_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_RADIO_SUCCESS:
            return {
                ...state,
                loading: false,
                info: action.payload,
            };
        case GET_RADIO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}