import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

import {
  faHome,
  faSearch,
  faBroadcastTower,
  faChild,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <div className="container">
      <section className="sidebar-topics">
        <NavLink exact to="/" className="item" activeClassName="active">
          <FontAwesomeIcon className="icon" icon={faHome} />
          <span>Home</span>
        </NavLink>

        <NavLink exact to="/discover" className="item" activeClassName="active">
          <FontAwesomeIcon className="icon" icon={faSearch} />
          <span>Discover</span>
        </NavLink>

        <NavLink exact to="/radio" className="item" activeClassName="active">
          <FontAwesomeIcon className="icon" icon={faBroadcastTower} />
          <span>Radio</span>
        </NavLink>

        <NavLink exact to="/foryou" className="item" activeClassName="active">
          <FontAwesomeIcon className="icon" icon={faChild} />
          <span>For you</span>
        </NavLink>
      </section>

      {/* your library */}
      <section className="sidebar-library">
        <h4>Your Library</h4>
        <NavLink exact to="/albums" className="item" activeClassName="active">
          {/* <FontAwesomeIcon className="icon" icon={faUser} /> */}
          <span>Albums</span>
        </NavLink>

        <NavLink exact to="/artists" className="item" activeClassName="active">
          {/* <FontAwesomeIcon className="icon" icon={faUser} /> */}
          <span>Artists</span>
        </NavLink>

        <NavLink exact to="/songs" className="item" activeClassName="active">
          {/* <FontAwesomeIcon className="icon" icon={faRecordVinyl} /> */}
          <span>Songs</span>
        </NavLink>

        <NavLink
          exact
          to="/playlists"
          className="item"
          activeClassName="active"
        >
          {/* <FontAwesomeIcon className="icon" icon={faMusic} /> */}
          <span>Playlists</span>
        </NavLink>
      </section>
    </div>
  );
};

export default Sidebar;
