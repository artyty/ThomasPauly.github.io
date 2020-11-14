import React from "react";
import { Link, withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark navbar-color">
        <div class="d-flex flex-grow-1">
        <span class="w-100 d-lg-none d-block">
      </span>
          <Link class="navbar-brand po-AndaleMono Green" to="/">
            tpauly ~ $
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link po-AndaleMono" to="/">
                  ~/Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Experiences" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Experiences">
                  ~/Experiences
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Formation" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Formation">
                  ~/Formations
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Competences" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Competences">
                  ~/Competences
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);