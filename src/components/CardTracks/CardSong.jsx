import React from "react";
import "./CardSong.css";

import convertDurationTrack from "../../core/functions/convertDurationTrack";
import PlayButton from "../Buttons/PlayButton";
import HeartButton from "../Buttons/HeartButton";

const CardSong = ({ song }) => {
  return (
    <div className="container-song">
      <div className="cover-container">
        <img src={song.album.cover_small} alt={song.title} />
      </div>
      <div className="info-container">
        <span>{song.title_short}</span>
        <div className="contributors">
          <p key={song.artist.id} className="track-artist">
            {song.artist.name}
          </p>
        </div>
      </div>
      <p className="duration">{convertDurationTrack(song.duration)}</p>
      <PlayButton url={song.preview} />
      <HeartButton track={song} />
    </div>
  );
};

export default CardSong;
