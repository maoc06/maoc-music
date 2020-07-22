import React, { Component } from "react";
import { Link } from "react-router-dom";

class FavoriteMobilePage extends Component {
  render() {
    return (
      <div className="container-right">
        <section className="section-favorite">
          <Link to="/albums">
            <h1>Albums</h1>
          </Link>
        </section>
        <section className="section-favorite">
          <Link to="/artists">
            <h1>Artists</h1>
          </Link>
        </section>
        <section className="section-favorite">
          <Link to="/songs">
            <h1>Songs</h1>
          </Link>
        </section>
        <section className="section-favorite">
          <Link to="/playlists">
            <h1>Playlists</h1>
          </Link>
        </section>
      </div>
    );
  }
}

export default FavoriteMobilePage;
