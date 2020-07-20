import React, { useState } from "react";
import "./FollowButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const FollowButton = ({ isTrack }) => {
  const [follow, setFollow] = useState(false);

  const toggle = () => {
    setFollow(!follow);
  };

  if (isTrack)
    return (
      <div className="Track-Card">
        <FontAwesomeIcon
          icon={faHeart}
          className={"Heart" + (follow ? " isFollow" : "")}
          onClick={toggle}
        />
        <span className={"Feedback" + (follow ? " Press" : "")}>
          <FontAwesomeIcon icon={faHeart} />
        </span>
      </div>
    );
  return (
    <button
      onClick={toggle}
      className={"Follow-Button" + (follow ? " Press" : "")}
    >
      <FontAwesomeIcon icon={faHeart} />
      <span>{follow ? "Unfollow" : "Follow"}</span>
      <span className={"Feedback" + (follow ? " Press" : "")}>
        <FontAwesomeIcon icon={faHeart} />
      </span>
    </button>
  );
};

export default FollowButton;
