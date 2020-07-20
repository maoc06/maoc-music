import {
    GET_GENRES_LOADING,
    GET_GENRES_SUCCESS,
    GET_GENRES_ERROR,
} from "../../core/constants/action-types";

export function actionGenreLoading() {
    return {
        type: GET_GENRES_LOADING,
    };
}

export function actionGenreSuccess(data) {
    return {
        type: GET_GENRES_SUCCESS,
        payload: data,
    };
}

export function actionGenreError(error) {
    return {
        type: GET_GENRES_ERROR,
        payload: error,
    };
}