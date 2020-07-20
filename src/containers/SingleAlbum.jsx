import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import fetchAlbumAction from "../api/fetchSingleAlbum";
import convertDurationTrack from "../core/functions/convertDurationTrack";
import convertDurationAlbum from "../core/functions/convertDurationAlbum";
import convertNumber from "../core/functions/convertNumber";

import Loading from "../components/Loading/Loading";
import PlayButton from "../components/Buttons/PlayButton";

class SingleAlbum extends Component {
  componentDidMount() {
    const idAlbum = this.props.match.params.id;
    const { fetchAlbum } = this.props;
    fetchAlbum(idAlbum);
  }

  render() {
    const { album, loading } = this.props;

    if (loading) return <Loading />;
    return (
      <div className="container-right">
        <header>
          <img src={album.cover_medium} alt={album.title} />
          <section className="info">
            <h1>{album.title}</h1>
            <div className="tags-genres">
              {album.genres.data.map((genre) => (
                <Link to={`/genre/${genre.id}`}>
                  <p key={genre.id}>{genre.name}</p>
                </Link>
              ))}
            </div>
            <div className="details">
              <p>{album.nb_tracks} Songs</p>
              <p id="dot">&bull;</p>
              <p>{convertDurationAlbum(album.duration)}</p>
            </div>
            <p>{convertNumber(album.fans)} Fans</p>
          </section>
        </header>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Duration</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {album.tracks.data.map((track, index) => (
              <tr key={track.id}>
                <td>{index + 1}</td>
                <td>{track.title}</td>
                <td>{convertDurationTrack(track.duration)}</td>
                <td>
                  <PlayButton url={track.preview} />
                  {/* <FontAwesomeIcon icon={faPlay} /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.singleAlbums.error,
  album: state.singleAlbums.info,
  loading: state.singleAlbums.loading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchAlbum: fetchAlbumAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SingleAlbum);
