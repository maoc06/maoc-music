import {
    GET_ALBUMS_ARTIST_LOADING,
    GET_ALBUMS_ARTIST_SUCCESS,
    GET_ALBUMS_ARTIST_ERROR,
} from "../../core/constants/action-types";

const initialState = {
    loading: true,
    albums: [],
    error: null,
};

export default function albumsArtist(state = initialState, action) {
    switch (action.type) {
        case GET_ALBUMS_ARTIST_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_ALBUMS_ARTIST_SUCCESS:
            return {
                ...state,
                loading: false,
                albums: action.payload,
            };
        case GET_ALBUMS_ARTIST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}