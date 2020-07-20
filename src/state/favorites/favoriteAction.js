import {
    ADD_FAVORITE_SONG,
    REMOVE_FAVORITE_SONG,
} from "../../core/constants/action-types";

export function actionAddFavorite() {
    return {
        type: ADD_FAVORITE_SONG,
    };
}

export function actionRemoveFavorite(data) {
    return {
        type: REMOVE_FAVORITE_SONG,
        payload: data,
    };
}