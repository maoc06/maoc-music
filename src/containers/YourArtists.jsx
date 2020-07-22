import React, { Component } from "react";
import { connect } from "react-redux";

import MaleSingerBowie from "../assets/artists/male-singer_bowie.png";
import MaleSingerPrince from "../assets/artists/male-singer_prince.png";
import FemaleSingerBowie from "../assets/artists/female-singer_bowie.png";
import FemaleSingerPrince from "../assets/artists/female-singer_prince.png";

import randomNumber from "../core/functions/randomNumber";

import NotYet from "../components/Others/NotYet";
import Card from "../components/CardArtists/Card";

class YourArtists extends Component {
  constructor(props) {
    super(props);
    const emojis = [
      MaleSingerBowie,
      FemaleSingerBowie,
      MaleSingerPrince,
      FemaleSingerPrince,
    ];
    this.state = { imageSelected: emojis[randomNumber(0, 4)] };
  }

  render() {
    const { followingArtists } = this.props;

    return (
      <React.Fragment>
        <h1>Your Artists</h1>
        <div className="featured-artists">
          {followingArtists.length === 0 || followingArtists === null ? (
            <NotYet
              type={"artists"}
              message={"Find your favorite artist and start following them"}
              imgSrc={this.state.imageSelected}
            />
          ) : (
            followingArtists.map((artist) => (
              <Card key={artist.id} artist={artist} />
            ))
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  followingArtists: state.favorites.followingArtists,
});

export default connect(mapStateToProps)(YourArtists);
