import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import fetchTopAlbumsAction from "../api/fetchChart";

import Loading from "../components/Loading/Loading";
import CardAlbum from "../components/CardAlbum/CardAlbum";

class ChartAlbums extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
  }

  componentDidMount() {
    const { fetchTopAlbums } = this.props;
    fetchTopAlbums();
  }

  handleRight(total) {
    let limit = Math.floor(total / 2) - 1;
    if (this.state.index < limit) {
      let n = this.state.index + 1;
      this.setState({ index: n });
      document.getElementById("left").style.transform = `translateX(-${
        n * (170 + 40)
      }px)`;
    }
  }
  handleLeft() {
    if (this.state.index > 0) {
      let n = this.state.index - 1;
      this.setState({ index: n });
      document.getElementById("left").style.transform = `translateX(-${
        n * (170 + 40)
      }px)`;
    }
  }

  render() {
    const { albums, loading, error } = this.props;

    if (loading) return <Loading />;
    else {
      return (
        <div>
          {error && <span>{error}</span>}
          <div className="header-carrousel">
            <h1>Trending Albums</h1>
            <div>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="arrow"
                onClick={this.handleLeft}
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                className="arrow"
                onClick={this.handleRight.bind(this, albums.total)}
              />
            </div>
          </div>
          <section>
            <div className="slider">
              <div className="items-slider" id="left">
                {albums.data.map((album) => (
                  <CardAlbum key={album.id} album={album} />
                ))}
              </div>
            </div>
          </section>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  error: state.chart.error,
  albums: state.chart.top.albums,
  loading: state.chart.loading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchTopAlbums: fetchTopAlbumsAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ChartAlbums);
