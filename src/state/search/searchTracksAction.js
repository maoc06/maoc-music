import {
    SEARCH_TRACKS_LOADING,
    SEARCH_TRACKS_SUCCESS,
    SEARCH_TRACKS_ERROR,
} from "../../core/constants/action-types";

export function actionSearchTracksPending() {
    return {
        type: SEARCH_TRACKS_LOADING,
    };
}

export function actionSearchTracksSuccess(data) {
    return {
        type: SEARCH_TRACKS_SUCCESS,
        payload: data,
    };
}

export function actionSearchTracksError(error) {
    return {
        type: SEARCH_TRACKS_ERROR,
        payload: error,
    };
}