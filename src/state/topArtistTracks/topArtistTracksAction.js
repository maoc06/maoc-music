import {
    GET_TOP_ARTIST_TRACKS_LOADING,
    GET_TOP_ARTIST_TRACKS_SUCCESS,
    GET_TOP_ARTIST_TRACKS_ERROR,
} from "../../core/constants/action-types";

export function actionTopArtistTracksPending() {
    return {
        type: GET_TOP_ARTIST_TRACKS_LOADING,
    };
}

export function actionTopArtistTracksSuccess(data) {
    return {
        type: GET_TOP_ARTIST_TRACKS_SUCCESS,
        payload: data,
    };
}

export function actionTopArtistTracksError(error) {
    return {
        type: GET_TOP_ARTIST_TRACKS_ERROR,
        payload: error,
    };
}