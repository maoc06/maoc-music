import {
    GET_RELATED_ARTISTS_LOADING,
    GET_RELATED_ARTISTS_SUCCESS,
    GET_RELATED_ARTISTS_ERROR,
} from "../../core/constants/action-types";

export function actionRelatedArtistsLoading() {
    return {
        type: GET_RELATED_ARTISTS_LOADING,
    };
}

export function actionRelatedArtistsSuccess(data) {
    return {
        type: GET_RELATED_ARTISTS_SUCCESS,
        payload: data,
    };
}

export function actionRelatedArtistError(error) {
    return {
        type: GET_RELATED_ARTISTS_ERROR,
        payload: error,
    };
}