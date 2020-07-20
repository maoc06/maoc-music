import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";

// common
import SideBar from "../components/SideBar/Sidebar";
import SearchBar from "../containers/SearchBar";
// topics sidebar
import Home from "../pages/HomePage";
import Discover from "../pages/DiscoverPage";
import Radio from "../pages/RadioPage";
import ForYou from "../pages/ForYouPage";
// you library pages sidebar
import Albums from "../pages/AlbumsPage";
import Artists from "../pages/ArtistsPage";
import Songs from "../pages/SongsPage";
import Playlists from "../pages/PlaylistsPage";
// Single Pages
import SingleArtist from "../pages/SingleArtistPage";
import SingleAlbum from "../containers/SingleAlbum";
import SingleRadio from "../pages/SingleRadioPage";
import SingleGenre from "../pages/SingleGenre";
// Others
import Error from "../pages/Error";
import store from "../state/store";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <SideBar />
        <Provider store={store}>
          <SearchBar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/discover" component={Discover}></Route>
            <Route exact path="/radio" component={Radio}></Route>
            <Route exact path="/foryou" component={ForYou}></Route>

            <Route exact path="/albums" component={Albums}></Route>
            <Route exact path="/artists" component={Artists}></Route>
            <Route exact path="/songs" component={Songs}></Route>
            <Route exact path="/playlists" component={Playlists}></Route>

            <Route exact path="/artist/:id" component={SingleArtist} />
            <Route exact path="/album/:id" component={SingleAlbum} />
            <Route exact path="/genre/:id" component={SingleGenre} />
            <Route exact path="/radio/:id" component={SingleRadio} />

            <Route component={Error} />
          </Switch>
        </Provider>
      </div>
    </React.Fragment>
  );
}

export default App;
