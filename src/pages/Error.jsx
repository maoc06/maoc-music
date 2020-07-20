import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container-right">
      <div className="error-container">
        <div className="Error-Title">Oops!</div>
        <h3>404 - PAGE NOT FOUND</h3>
        <p>The page you are looking for can not be found</p>
        <Link to="/">
          <button>GO HOME</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
