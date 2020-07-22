import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import fetchSearchArtistAction from "../api/fetchSearchArtists";
import fetchSearchAlbumsAction from "../api/fetchSearchAlbums";
import fetchSearchTracksAction from "../api/fetchSearchTracks";

import HintResults from "../components/SearchResults/HintResults";
import ToogleTheme from "../components/Buttons/Toggle";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    const { searchArtists, searchAlbums, searchTracks } = this.props;
    if (this.state.query.length > 0) {
      searchArtists(this.state.query);
      searchAlbums(this.state.query);
      searchTracks(this.state.query);
    }
  }

  handleChange(e) {
    let query = e.target.value;
    this.setState({ query });

    const { searchArtists, searchAlbums, searchTracks } = this.props;

    if (query.length > 0) {
      searchArtists(query);
      searchAlbums(query);
      searchTracks(query);
    } else {
      if (document.getElementById("hint-container")) {
        document.getElementById("hint-container").style.display = "none";
      }
    }
  }

  render() {
    window.addEventListener("click", function (e) {
      // if element exists, then...
      if (document.getElementById("hint-container")) {
        document.getElementById("hint-container").style.display = "none";
      }
    });
    const {
      foundArtists,
      foundAlbums,
      foundTracks,
      loadingArtists,
      loadingAlbums,
      loadingTracks,
    } = this.props;
    if (loadingArtists || loadingAlbums || loadingTracks)
      return (
        <div className="search-container">
          <form onSubmit={this.handleSearch}>
            <FontAwesomeIcon className="icon-search" icon={faSearch} />
            <input
              type="text"
              placeholder="Search Artist, Albums, Songs"
              onChange={this.handleChange}
            />
          </form>
          <ToogleTheme />
        </div>
      );
    return (
      <div className="search-container">
        <form onSubmit={this.handleSearch}>
          <FontAwesomeIcon className="icon-search" icon={faSearch} />
          <input
            type="text"
            placeholder="Search Artist, Albums, Songs"
            onChange={this.handleChange}
          />
          <HintResults
            artistsFound={foundArtists}
            albumsFound={foundAlbums}
            songsFound={foundTracks}
          />
        </form>
        <ToogleTheme />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  //artists
  loadingArtists: state.searchArtists.loading,
  errorArtists: state.searchArtists.error,
  foundArtists: state.searchArtists.artists,
  // albums
  loadingAlbums: state.searchAlbums.loading,
  errorAlbums: state.searchAlbums.error,
  foundAlbums: state.searchAlbums.albums,
  // tracks
  loadingTracks: state.searchTracks.loading,
  errorTracks: state.searchTracks.error,
  foundTracks: state.searchTracks.tracks,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      searchArtists: fetchSearchArtistAction,
      searchAlbums: fetchSearchAlbumsAction,
      searchTracks: fetchSearchTracksAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
