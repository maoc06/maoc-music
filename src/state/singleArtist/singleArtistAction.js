import {
    GET_SINGLE_ARTIST_LOADING,
    GET_SINGLE_ARTIST_SUCCESS,
    GET_SINGLE_ARTIST_ERROR,
} from "../../core/constants/action-types";

export function actionSingleArtistPending() {
    return {
        type: GET_SINGLE_ARTIST_LOADING,
    };
}

export function actionSingleArtistSuccess(data) {
    return {
        type: GET_SINGLE_ARTIST_SUCCESS,
        payload: data,
    };
}

export function actionSingleArtistError(error) {
    return {
        type: GET_SINGLE_ARTIST_ERROR,
        payload: error,
    };
}