import React, { Component } from "react";
import ArtistsGenre from "../containers/ArtistsByGenre";

class SingleGenrePage extends Component {
  render() {
    return (
      <div className="container-right">
        <ArtistsGenre id={this.props.match.params.id} />
      </div>
    );
  }
}

export default SingleGenrePage;
