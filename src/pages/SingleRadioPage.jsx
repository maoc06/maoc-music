import React, { Component } from "react";
import SingleRadio from "../containers/SingleRadio";
import { render } from "@testing-library/react";

class SingleRadioPage extends Component {
  render() {
    return (
      <div className="container-right">
        <SingleRadio idRadio={this.props.match.params.id} />
      </div>
    );
  }
}

export default SingleRadioPage;
