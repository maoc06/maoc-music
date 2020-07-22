import React, { Component } from "react";
import "./FollowButton.css";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import {
  actionAddFavorite,
  actionRemoveFavorite,
} from "../../state/favorites/favoriteAction";

class HeartButton extends Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false };
    this.handleToogle = this.handleToogle.bind(this);
  }

  handleToogle = () => {
    const { track, addFavorites, removeFavorite, favorites } = this.props;
    this.setState((state) => ({ toggle: !state.toggle }));
    favorites.find((trackSaved) => trackSaved.id === track.id)
      ? removeFavorite(track.id)
      : addFavorites(track);
  };

  render() {
    const { track, favorites } = this.props;

    return (
      <div className="Track-Card">
        <FontAwesomeIcon
          icon={faHeart}
          className={
            "Heart" +
            (favorites.find((trackSaved) => trackSaved.id === track.id)
              ? " isFollow"
              : "")
          }
          onClick={this.handleToogle}
        />
        <span className={"Feedback" + (this.state.toggle ? " Press" : "")}>
          <FontAwesomeIcon icon={faHeart} />
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  favorites: state.favorites.favoritesSongs,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorites: (data) => dispatch(actionAddFavorite(data)),
    removeFavorite: (data) => dispatch(actionRemoveFavorite(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeartButton);
