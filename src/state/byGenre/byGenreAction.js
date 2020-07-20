import {
    GET_ARTISTS_BY_GENRE_LOADING,
    GET_ARTISTS_BY_GENRE_SUCCESS,
    GET_ARTISTS_BY_GENRE_ERROR,
} from "../../core/constants/action-types";

export function actionByGenreArtistsPending() {
    return {
        type: GET_ARTISTS_BY_GENRE_LOADING,
    };
}

export function actionByGenreArtistsSuccess(data) {
    return {
        type: GET_ARTISTS_BY_GENRE_SUCCESS,
        payload: data,
    };
}

export function actionByGenreArtistsError(error) {
    return {
        type: GET_ARTISTS_BY_GENRE_ERROR,
        payload: error,
    };
}