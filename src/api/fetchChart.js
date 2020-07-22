import fetch from "cross-fetch";
import {
    actionTopArtistsPending,
    actionTopArtistsSuccess,
    actionTopArtistsError,
} from "../state/chart/topArtistsAction";

export default function fetchChart() {
    return (dispatch) => {
        dispatch(actionTopArtistsPending());
        // fetch("/api/chart")
        fetch("/chart")
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }

                dispatch(actionTopArtistsSuccess(res));
                return res;
            })
            .catch((error) => {
                dispatch(actionTopArtistsError(error));
            });
    };
}