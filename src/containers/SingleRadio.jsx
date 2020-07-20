import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchRadioAction from "../api/fetchSingleRadio";
import convertDurationTrack from "../core/functions/convertDurationTrack";

import Loading from "../components/Loading/Loading";
import PlayButton from "../components/Buttons/PlayButton";

class SingleRadio extends Component {
  componentDidMount() {
    const idRadio = this.props.idRadio;
    const { fetchRadio } = this.props;
    fetchRadio(idRadio);
  }

  render() {
    const { radio, loading } = this.props;

    if (loading) return <Loading />;

    return (
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th></th>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Duration</th>
            <th> </th>
          </tr>
          {radio.data.map((track, index) => (
            <tr key={track.id}>
              <td>{index + 1}</td>
              <td>
                <img src={track.album.cover_small} alt={track.album.title} />
              </td>
              <td>
                <p>{track.title}</p>
              </td>
              <td>
                <p>{track.artist.name}</p>
              </td>
              <td>
                <p>{track.album.title}</p>
              </td>
              <td>
                <p>{convertDurationTrack(track.duration)}</p>
              </td>
              <td>
                <PlayButton url={track.preview} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.singleRadio.error,
  radio: state.singleRadio.info,
  loading: state.singleRadio.loading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchRadio: fetchRadioAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SingleRadio);
