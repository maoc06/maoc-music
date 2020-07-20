import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchTopTracksAction from "../api/fetchTopArtistTracks";

import Loading from "../components/Loading/Loading";
import CardSong from "../components/CardTracks/CardSong";

class PopularTracks extends Component {
  componentDidMount() {
    const { fetchTracks } = this.props;
    fetchTracks(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      const { fetchTracks } = this.props;
      fetchTracks(this.props.id);
    }
  }

  render() {
    const { tracks, loading } = this.props;
    if (loading) return <Loading />;
    return (
      <React.Fragment>
        <h2>Popular</h2>

        <section className="top-songs-container">
          {tracks.data.map((track) => (
            <CardSong key={track.id} song={track} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.topArtistTracks.loading,
  error: state.topArtistTracks.error,
  tracks: state.topArtistTracks.tracks,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchTracks: fetchTopTracksAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PopularTracks);
