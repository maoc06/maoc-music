import fetch from "cross-fetch";
import {
    actionGenreLoading,
    actionGenreSuccess,
    actionGenreError,
} from "../state/genres/genresAction";

export default function fetchGenres() {
    return (dispatch) => {
        dispatch(actionGenreLoading());
        fetch("/genre")
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }

                dispatch(actionGenreSuccess(res));
                return res;
            })
            .catch((error) => {
                dispatch(actionGenreError(error));
            });
    };
}