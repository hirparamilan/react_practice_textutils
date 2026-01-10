import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.darkMode ? 'dark' : 'light'} bg-${props.darkMode ? 'dark' : 'light'}`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/react_practice_textutils">
          {props.title}
        </NavLink>
        {/* <a className="navbar-brand" href="/">
          {props.title}
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="/">
                Home
              </a> */}
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                to="/react_practice_textutils"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/">
                {props.aboutText}
              </a> */}
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                to="/react_practice_textutils/about"
              >
                {props.aboutText}
              </NavLink>
            </li>
          </ul>
          <div className={`form-check form-switch me-3 text-${props.darkMode ? 'light' : 'dark'}`}>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={props.toggleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

// Deprecated... Use typescript interface instead
Navbar.propTypes = { title: PropTypes.number, aboutText: PropTypes.string };

export default Navbar;
