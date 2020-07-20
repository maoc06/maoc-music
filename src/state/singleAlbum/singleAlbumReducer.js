import {
    GET_SINGLE_ALBUM_LOADING,
    GET_SINGLE_ALBUM_SUCCESS,
    GET_SINGLE_ALBUM_ERROR,
} from "../../core/constants/action-types";

const initialState = {
    loading: true,
    info: {},
    error: null,
};

export default function singleAlbums(state = initialState, action) {
    switch (action.type) {
        case GET_SINGLE_ALBUM_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_SINGLE_ALBUM_SUCCESS:
            return {
                ...state,
                loading: false,
                info: action.payload,
            };
        case GET_SINGLE_ALBUM_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}