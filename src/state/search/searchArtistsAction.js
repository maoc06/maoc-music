import {
    SEARCH_ARTISTS_LOADING,
    SEARCH_ARTISTS_SUCCESS,
    SEARCH_ARTISTS_ERROR,
} from "../../core/constants/action-types";

export function actionSearchArtistsPending() {
    return {
        type: SEARCH_ARTISTS_LOADING,
    };
}

export function actionSearchArtistsSuccess(data) {
    return {
        type: SEARCH_ARTISTS_SUCCESS,
        payload: data,
    };
}

export function actionSearchArtistsError(error) {
    return {
        type: SEARCH_ARTISTS_ERROR,
        payload: error,
    };
}