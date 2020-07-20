import {
    GET_TOP_ARTISTS_LOADING,
    GET_TOP_ARTISTS_SUCCESS,
    GET_TOP_ARTISTS_ERROR,
} from "../../core/constants/action-types";

export function actionTopArtistsPending() {
    return {
        type: GET_TOP_ARTISTS_LOADING,
    };
}

export function actionTopArtistsSuccess(data) {
    return {
        type: GET_TOP_ARTISTS_SUCCESS,
        payload: data,
    };
}

export function actionTopArtistsError(error) {
    return {
        type: GET_TOP_ARTISTS_ERROR,
        payload: error,
    };
}