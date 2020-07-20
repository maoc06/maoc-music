import {
    GET_RADIO_LOADING,
    GET_RADIO_SUCCESS,
    GET_RADIO_ERROR,
} from "../../core/constants/action-types";

export function actionRadioPending() {
    return {
        type: GET_RADIO_LOADING,
    };
}

export function actionRadioSuccess(data) {
    return {
        type: GET_RADIO_SUCCESS,
        payload: data,
    };
}

export function actionRadioError(error) {
    return {
        type: GET_RADIO_ERROR,
        payload: error,
    };
}