import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchArtistsByGenreAction from "../api/fetchArtistsByGenre";

import Loading from "../components/Loading/Loading";
import Card from "../components/CardArtists/Card";

class ArtistsByGenre extends Component {
  componentDidMount() {
    const { fetchArtists } = this.props;
    fetchArtists(this.props.id);
  }

  render() {
    const { artists, loading, error } = this.props;

    if (loading) return <Loading />;
    else {
      return (
        <React.Fragment>
          {error && <span>{error}</span>}
          <h1>Artists</h1>
          <div className="featured-artists">
            {artists.data.map((artist) => (
              <Card key={artist.id} artist={artist} />
            ))}
          </div>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  error: state.artistsByGenre.error,
  artists: state.artistsByGenre.artists,
  loading: state.artistsByGenre.loading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchArtists: fetchArtistsByGenreAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsByGenre);
