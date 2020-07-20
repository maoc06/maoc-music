import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import fetchArtistsRelatedAction from "../api/fetchArtistsRelated";

import Loading from "../components/Loading/Loading";
import Card from "../components/CardArtists/Card";

class RelatedArtists extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
  }

  componentDidMount() {
    const { fecthRelated } = this.props;
    fecthRelated(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      const { fecthRelated } = this.props;
      fecthRelated(this.props.id);
    }
  }

  handleRight(total) {
    let limit = Math.round(total / 2) + 5;
    if (this.state.index < limit) {
      let n = this.state.index + 1;
      this.setState({ index: n });
      document.getElementById(
        "carousel-related"
      ).style.transform = `translateX(-${n * (170 + 40)}px)`;
    }
  }
  handleLeft() {
    if (this.state.index > 0) {
      let n = this.state.index - 1;
      this.setState({ index: n });
      document.getElementById(
        "carousel-related"
      ).style.transform = `translateX(-${n * (170 + 40)}px)`;
    }
  }

  render() {
    const { related, loading } = this.props;
    if (loading) return <Loading />;
    return (
      <React.Fragment>
        <div className="header-carrousel">
          <h2>Fans Also Like</h2>
          <div>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="arrow"
              onClick={this.handleLeft}
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              className="arrow"
              onClick={this.handleRight.bind(this, related.total)}
            />
          </div>
        </div>

        <section>
          <div className="slider">
            <div className="items-slider" id="carousel-related">
              {related.data.map((artist) => (
                <Card key={artist.id} artist={artist} />
              ))}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.relatedArtists.loading,
  error: state.relatedArtists.error,
  related: state.relatedArtists.related,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fecthRelated: fetchArtistsRelatedAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(RelatedArtists);
