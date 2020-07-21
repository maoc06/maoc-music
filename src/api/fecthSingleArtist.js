import fetch from "cross-fetch";
import {
    actionSingleArtistPending,
    actionSingleArtistSuccess,
    actionSingleArtistError,
} from "../state/singleArtist/singleArtistAction";

export default function fetchSingleArtist(id) {
    return (dispatch) => {
        dispatch(actionSingleArtistPending());
        fetch(`/api/artist/${id}`)
            // fetch(`/artist/${id}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }

                dispatch(actionSingleArtistSuccess(res));

                return res;
            })
            .catch((error) => {
                dispatch(actionSingleArtistError(error));
            });
    };
}