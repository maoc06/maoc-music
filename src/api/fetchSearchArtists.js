import fetch from "cross-fetch";
import {
    actionSearchArtistsPending,
    actionSearchArtistsSuccess,
    actionSearchArtistsError,
} from "../state/search/searchArtistsAction";

export default function fetchSearchArtists(query) {
    return (dispatch) => {
        dispatch(actionSearchArtistsPending());
        fetch(`/api/search/artist?q=${query}&limit=3`)
            // fetch(`/search/artist?q=${query}&limit=3`)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }

                dispatch(actionSearchArtistsSuccess(res));

                return res;
            })
            .catch((error) => {
                dispatch(actionSearchArtistsError(error));
            });
    };
}