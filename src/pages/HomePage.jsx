import React, { Component } from "react";
import ChartAlbums from "../containers/ChartAlbums";
import PopularGenres from "../components/PopularGenres/PopularGenres";
import ChartTracks from "../containers/ChartTracks";
import ChartArtists from "../containers/ChartArtists";

class HomePage extends Component {
  render() {
    return (
      <div className="container-right">
        {/* <ChartAlbums /> */}
        <div className="home-divide">
          <div className="popular-left">
            <PopularGenres />
          </div>
          <div className="popular-right">{/* <ChartTracks /> */}</div>
        </div>
        {/* <ChartArtists /> */}
      </div>
    );
  }
}

export default HomePage;
