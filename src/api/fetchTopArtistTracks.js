import fetch from "cross-fetch";
import {
    actionTopArtistTracksPending,
    actionTopArtistTracksSuccess,
    actionTopArtistTracksError,
} from "../state/topArtistTracks/topArtistTracksAction";

export default function fetchTopArtistTracks(id) {
    return (dispatch) => {
        dispatch(actionTopArtistTracksPending());
        // fetch(`/api/artist/${id}/top`)
        fetch(`/artist/${id}/top`)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }

                dispatch(actionTopArtistTracksSuccess(res));

                return res;
            })
            .catch((error) => {
                dispatch(actionTopArtistTracksError(error));
            });
    };
}