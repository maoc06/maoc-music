import {
    ADD_FAVORITE_SONG,
    REMOVE_FAVORITE_SONG,
    ADD_FOLLOWER_ARTIST,
    REMOVE_FOLLOWER_ARTIST,
} from "../../core/constants/action-types";

const initialState = {
    favoritesSongs: [],
    followingArtists: [],
};

export default function setFavorites(state = initialState, action) {
    switch (action.type) {
        case ADD_FAVORITE_SONG:
            return {
                ...state,
                favoritesSongs: [...state.favoritesSongs, action.payload],
            };
        case REMOVE_FAVORITE_SONG:
            return {
                ...state,
                favoritesSongs: [
                    ...state.favoritesSongs.filter((song) => song.id !== action.payload),
                ],
            };
        case ADD_FOLLOWER_ARTIST:
            return {
                ...state,
                followingArtists: [...state.followingArtists, action.payload],
            };
        case REMOVE_FOLLOWER_ARTIST:
            return {
                ...state,
                followingArtists: [
                    ...state.followingArtists.filter(
                        (artist) => artist.id !== action.payload
                    ),
                ],
            };
        default:
            return state;
    }
}