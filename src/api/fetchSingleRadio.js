import fetch from "cross-fetch";
import {
    actionRadioPending,
    actionRadioSuccess,
    actionRadioError,
} from "../state/radio/singleRadioAction";

export default function fetchSingleRadio(id) {
    return (dispatch) => {
        dispatch(actionRadioPending());
        fetch(`/radio/${id}/tracks`)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }

                dispatch(actionRadioSuccess(res));

                return res;
            })
            .catch((error) => {
                dispatch(actionRadioError(error));
            });
    };
}