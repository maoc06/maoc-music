import React from "react";
import "./CardAlbum.css";
import { Link } from "react-router-dom";

const CardAlbum = ({ album }) => {
  return (
    <Link to={`/album/${album.id}`} className="album">
      <img src={album.cover_medium} alt={album.title} className="card-album" />
      <p className="Album-Title">{album.title}</p>
      {/* <p>{album.year}</p> */}
    </Link>
  );
};

export default CardAlbum;
