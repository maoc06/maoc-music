import React, { Component } from "react";

import Title from "../containers/Title";
import Albums from "../containers/AlbumsArtists";
import PopularTracks from "../containers/PopularTracks";
import RelatedArtists from "../containers/RelatedArtists";

class SingleArtistPage extends Component {
  render() {
    return (
      <div className="container-right">
        <Title id={this.props.match.params.id} />
        <Albums id={this.props.match.params.id} />
        <PopularTracks id={this.props.match.params.id} />
        <RelatedArtists id={this.props.match.params.id} />
      </div>
    );
  }
}

export default SingleArtistPage;
