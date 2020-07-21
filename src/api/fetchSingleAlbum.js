import fetch from "cross-fetch";
import {
    actionSingleAlbumPending,
    actionSingleAlbumSuccess,
    actionSingleAlbumError,
} from "../state/singleAlbum/singleAlbumAction";

export default function fetchSingleAlbum(id) {
    return (dispatch) => {
        dispatch(actionSingleAlbumPending());
        fetch(`/api/album/${id}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }

                dispatch(actionSingleAlbumSuccess(res));

                return res;
            })
            .catch((error) => {
                dispatch(actionSingleAlbumError(error));
            });
    };
}