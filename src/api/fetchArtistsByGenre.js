import fetch from "cross-fetch";
import {
    actionByGenreArtistsPending,
    actionByGenreArtistsSuccess,
    actionByGenreArtistsError,
} from "../state/byGenre/byGenreAction";

export default function fetchArtistByGenre(id) {
    return (dispatch) => {
        dispatch(actionByGenreArtistsPending());
        // fetch(`/api/genre/${id}/artists`)
        fetch(`/genre/${id}/artists`)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }

                dispatch(actionByGenreArtistsSuccess(res));

                return res;
            })
            .catch((error) => {
                dispatch(actionByGenreArtistsError(error));
            });
    };
}