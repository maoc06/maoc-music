import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchTopRadiosAction from "../api/fetchTopRadios";

import Loading from "../components/Loading/Loading";
import StandarCard from "../components/StandardCard/StdCard";

class TopRadios extends Component {
  componentDidMount() {
    const { fetchTopRadios } = this.props;
    fetchTopRadios();
  }

  render() {
    const { radios, loading, error } = this.props;
    if (loading) return <Loading />;
    return (
      <React.Fragment>
        <h1>Top Radios</h1>
        <div className="genres-section">
          {radios.data.map((radio) => (
            <StandarCard
              text={radio.title}
              pic={radio.picture_big}
              url={`/radio/${radio.id}`}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  error: state.topTopRadios.error,
  radios: state.topTopRadios.radios,
  loading: state.topTopRadios.loading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchTopRadios: fetchTopRadiosAction,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(TopRadios);
