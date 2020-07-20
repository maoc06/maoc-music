import {
    GET_SINGLE_ALBUM_LOADING,
    GET_SINGLE_ALBUM_SUCCESS,
    GET_SINGLE_ALBUM_ERROR,
} from "../../core/constants/action-types";

export function actionSingleAlbumPending() {
    return {
        type: GET_SINGLE_ALBUM_LOADING,
    };
}

export function actionSingleAlbumSuccess(data) {
    return {
        type: GET_SINGLE_ALBUM_SUCCESS,
        payload: data,
    };
}

export function actionSingleAlbumError(error) {
    return {
        type: GET_SINGLE_ALBUM_ERROR,
        payload: error,
    };
}