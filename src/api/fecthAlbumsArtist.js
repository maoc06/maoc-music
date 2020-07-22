import fetch from "cross-fetch";
import {
    actionAlbumsArtistPending,
    actionAlbumsArtistSuccess,
    actionAlbumsArtistError,
} from "../state/albumsArtist/albumsArtistAction";

export default function fetchAlbumsArtist(id) {
    return (dispatch) => {
        dispatch(actionAlbumsArtistPending());
        fetch(`/api/artist/${id}/albums`)
            // fetch(`/artist/${id}/albums`)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }

                dispatch(actionAlbumsArtistSuccess(res));
                return res;
            })
            .catch((error) => {
                dispatch(actionAlbumsArtistError(error));
            });
    };
}