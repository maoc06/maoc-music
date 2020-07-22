import {
    ADD_FAVORITE_SONG,
    REMOVE_FAVORITE_SONG,
    ADD_FOLLOWER_ARTIST,
    REMOVE_FOLLOWER_ARTIST,
} from "../../core/constants/action-types";

export function actionAddFavorite(data) {
    return {
        type: ADD_FAVORITE_SONG,
        payload: data,
    };
}

export function actionRemoveFavorite(data) {
    return {
        type: REMOVE_FAVORITE_SONG,
        payload: data,
    };
}
export function actionAddFollower(data) {
    return {
        type: ADD_FOLLOWER_ARTIST,
        payload: data,
    };
}
export function actionRemoveFollower(data) {
    return {
        type: REMOVE_FOLLOWER_ARTIST,
        payload: data,
    };
}