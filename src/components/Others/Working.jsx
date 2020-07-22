import React from "react";
import "./Working.css";
import ManConstruction from "../../assets/Man_Construction_Worker.png";
import GoHomeButton from "../Buttons/GoHomeButton";

const Working = () => {
  return (
    <div className="working-container">
      <img src={ManConstruction} alt="Man Construction Worker" />
      <h2>Under Construction</h2>
      <p>We're currently working on this page</p>
      <GoHomeButton />
    </div>
  );
};

export default Working;
