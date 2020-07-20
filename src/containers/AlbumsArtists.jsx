import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import fetchAlbumsAction from "../api/fecthAlbumsArtist";

import Loading from "../components/Loading/Loading";
import CardAlbum from "../components/CardAlbum/CardAlbum";

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
  }

  componentDidMount() {
    const { fetchAlbums } = this.props;
    fetchAlbums(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      const { fetchAlbums } = this.props;
      fetchAlbums(this.props.id);
    }
  }

  handleRight(total) {
    let limit = Math.round(total / 2) + 5;
    if (this.state.index < limit) {
      let n = this.state.index + 1;
      this.setState({ index: n });
      document.getElementById(
        "carousel-albums"
      ).style.transform = `translateX(-${n * (170 + 40)}px)`;
    }
  }
  handleLeft() {
    if (this.state.index > 0) {
      let n = this.state.index - 1;
      this.setState({ index: n });
      document.getElementById(
        "carousel-albums"
      ).style.transform = `translateX(-${n * (170 + 40)}px)`;
    }
  }

  render() {
    const { albums, loading } = this.props;
    if (loading) return <Loading />;
    return (
      <React.Fragment>
        <div className="header-carrousel">
          <h2>Albums</h2>
          <div>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="arrow"
              onClick={this.handleLeft}
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              className="arrow"
              onClick={this.handleRight.bind(this, albums.data.length)}
            />
          </div>
        </div>
        <section>
          <div className="slider">
            <div className="items-slider" id="carousel-albums">
              {albums.data.map((album) => (
                <CardAlbum key={album.id} album={album} />
              ))}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.albumsArtist.loading,
  error: state.albumsArtist.error,
  albums: state.albumsArtist.albums,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchAlbums: fetchAlbumsAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
