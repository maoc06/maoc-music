import fetch from "cross-fetch";
import {
    actionTopRadiosPending,
    actionTopRadiosSuccess,
    actionTopRadiosError,
} from "../state/radio/topRadiosAction";

export default function fetchTopRadios(id) {
    return (dispatch) => {
        dispatch(actionTopRadiosPending());
        fetch(`/api/radio/top`)
            // fetch(`/radio/top`)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }

                dispatch(actionTopRadiosSuccess(res));

                return res;
            })
            .catch((error) => {
                dispatch(actionTopRadiosError(error));
            });
    };
}