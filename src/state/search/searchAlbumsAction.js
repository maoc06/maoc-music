import {
    SEARCH_ALBUMS_LOADING,
    SEARCH_ALBUMS_SUCCESS,
    SEARCH_ALBUMS_ERROR,
} from "../../core/constants/action-types";

export function actionSearchAlbumsPending() {
    return {
        type: SEARCH_ALBUMS_LOADING,
    };
}

export function actionSearchAlbumsSuccess(data) {
    return {
        type: SEARCH_ALBUMS_SUCCESS,
        payload: data,
    };
}

export function actionSearchAlbumsError(error) {
    return {
        type: SEARCH_ALBUMS_ERROR,
        payload: error,
    };
}