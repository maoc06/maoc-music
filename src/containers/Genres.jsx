import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchGenresAction from "../api/fetchGenres";

import Loading from "../components/Loading/Loading";
import StandarCard from "../components/StandardCard/StdCard";

class Genres extends Component {
  componentDidMount() {
    const { fetchGenres } = this.props;
    fetchGenres();
  }

  render() {
    const { genres, loading, error } = this.props;
    if (loading) return <Loading />;
    return (
      <React.Fragment>
        <h1>Genres</h1>
        <div className="genres-section">
          {genres.data.slice(1, genres.data.length).map((genre) => (
            <StandarCard
              text={genre.name}
              pic={genre.picture_big}
              url={`/genre/${genre.id}`}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  error: state.genres.error,
  genres: state.genres.genres,
  loading: state.genres.loading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchGenres: fetchGenresAction,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Genres);
