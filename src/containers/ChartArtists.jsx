import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchTopArtistsAction from "../api/fetchChart";

import Loading from "../components/Loading/Loading";
import Card from "../components/CardArtists/Card";

class ChartArtists extends Component {
  componentDidMount() {
    const { fetchTopArtists } = this.props;
    fetchTopArtists();
  }

  render() {
    const { artists, loading, error } = this.props;

    if (loading) return <Loading />;
    else {
      return (
        <React.Fragment>
          {error && <span>{error}</span>}
          <h1>Featured Artists</h1>
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
  error: state.chart.error,
  artists: state.chart.top.artists,
  loading: state.chart.loading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchTopArtists: fetchTopArtistsAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ChartArtists);
