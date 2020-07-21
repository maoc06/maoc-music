import fetch from "cross-fetch";
import {
    actionSearchAlbumsPending,
    actionSearchAlbumsSuccess,
    actionSearchAlbumsError,
} from "../state/search/searchAlbumsAction";

export default function fetchSearchAlbums(query) {
    return (dispatch) => {
        dispatch(actionSearchAlbumsPending());
        fetch(`/api/search/album?q=${query}&limit=3`)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }

                dispatch(actionSearchAlbumsSuccess(res));

                return res;
            })
            .catch((error) => {
                dispatch(actionSearchAlbumsError(error));
            });
    };
}