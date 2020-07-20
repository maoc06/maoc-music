import {
    GET_ALBUMS_ARTIST_LOADING,
    GET_ALBUMS_ARTIST_SUCCESS,
    GET_ALBUMS_ARTIST_ERROR,
} from "../../core/constants/action-types";

export function actionAlbumsArtistPending() {
    return {
        type: GET_ALBUMS_ARTIST_LOADING,
    };
}

export function actionAlbumsArtistSuccess(data) {
    return {
        type: GET_ALBUMS_ARTIST_SUCCESS,
        payload: data,
    };
}

export function actionAlbumsArtistError(error) {
    return {
        type: GET_ALBUMS_ARTIST_ERROR,
        payload: error,
    };
}