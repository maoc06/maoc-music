import React, { Component } from "react";
import "./FollowButton.css";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import {
  actionAddFollower,
  actionRemoveFollower,
} from "../../state/favorites/favoriteAction";

class FollowButton extends Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false };
    this.handleToogle = this.handleToogle.bind(this);
  }

  handleToogle = () => {
    const { artist, addFollower, removeFollower, follower } = this.props;

    this.setState((state) => ({ toggle: !state.toggle }));

    follower.find((artistSaved) => artistSaved.id === artist.id)
      ? removeFollower(artist.id)
      : addFollower(artist);
  };

  render() {
    const { artist, follower } = this.props;

    return (
      <button
        icon={faHeart}
        className={
          "Follow-Button" +
          (follower.find((artistSaved) => artistSaved.id === artist.id)
            ? " Press"
            : "")
        }
        onClick={this.handleToogle}
      >
        <FontAwesomeIcon icon={faHeart} />
        <span>
          {follower.find((artistSaved) => artistSaved.id === artist.id)
            ? "Unfollow"
            : "Follow"}
        </span>
        <span className={"Feedback" + (this.state.toggle ? " Press" : "")}>
          <FontAwesomeIcon icon={faHeart} />
        </span>
      </button>
    );
  }
}

const mapStateToProps = (state) => ({
  follower: state.favorites.followingArtists,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addFollower: (data) => dispatch(actionAddFollower(data)),
    removeFollower: (data) => dispatch(actionRemoveFollower(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowButton);
