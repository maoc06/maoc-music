import {
    GET_TOP_RADIOS_LOADING,
    GET_TOP_RADIOS_SUCCESS,
    GET_TOP_RADIOS_ERROR,
} from "../../core/constants/action-types";

export function actionTopRadiosPending() {
    return {
        type: GET_TOP_RADIOS_LOADING,
    };
}

export function actionTopRadiosSuccess(data) {
    return {
        type: GET_TOP_RADIOS_SUCCESS,
        payload: data,
    };
}

export function actionTopRadiosError(error) {
    return {
        type: GET_TOP_RADIOS_ERROR,
        payload: error,
    };
}