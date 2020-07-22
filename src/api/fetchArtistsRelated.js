import fetch from "cross-fetch";
import {
    actionRelatedArtistsLoading,
    actionRelatedArtistsSuccess,
    actionRelatedArtistError,
} from "../state/relatedArtists/relatedArtistsAction";

export default function fetchArtistRelated(id) {
    return (dispatch) => {
        dispatch(actionRelatedArtistsLoading());
        // fetch(`/api/artist/${id}/related`)
        fetch(`/artist/${id}/related`)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }

                dispatch(actionRelatedArtistsSuccess(res));

                return res;
            })
            .catch((error) => {
                dispatch(actionRelatedArtistError(error));
            });
    };
}