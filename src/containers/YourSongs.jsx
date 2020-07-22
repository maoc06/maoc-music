import React, { Component } from "react";
import { connect } from "react-redux";

import NotesEmoji from "../assets/songs/multiple-musical-notes.png";
import NotYet from "../components/Others/NotYet";
import CardSong from "../components/CardTracks/CardSong";

class YourSongs extends Component {
  render() {
    const { favoritesSongs } = this.props;

    return (
      <React.Fragment>
        <h1>Your Songs</h1>
        <div className="top-songs-container">
          {favoritesSongs.length === 0 || favoritesSongs === null ? (
            <NotYet
              type={"songs"}
              message={"Find your favorite songs and mark them with your heart"}
              imgSrc={NotesEmoji}
            />
          ) : (
            favoritesSongs.map((track) => (
              <CardSong key={track.id} song={track} />
            ))
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  favoritesSongs: state.favorites.favoritesSongs,
});

export default connect(mapStateToProps)(YourSongs);
