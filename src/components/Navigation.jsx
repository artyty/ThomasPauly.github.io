import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Navigation =props => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <div class="navbar navbar-inverse" role="navigation"> 
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark navbar-color">
        <span class="w-100 d-lg-none d-block">
        </span>
          <Link class="navbar-brand po-AndaleMono Green" to="/">
            tpauly ~ $
          </Link>
          
          <div class="navbar-header"> 
          <button 
          class="custom-toggler navbar-toggler " 
          type="button"
          data-toggle="collapse" 
          data-target="#navbarResponsive" 
          aria-controls="navbarResponsive" 
          aria-expanded={!isNavCollapsed ? true : false} 
          aria-label="Toggle navigation" 
          onClick={handleNavCollapse}>
          <span class="navbar-toggler-icon"></span>
          </button>
          </div>
          <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarResponsive">
            <ul class="navbar-nav  nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  ~/Accueil
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Experiences" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Experiences">
                  ~/Expériences
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
                  ~/Compétences
                </Link>
              </li>
              <li>
                <a  href="../src/download/Cv_Thomas_Pauly.pdf" download>
                  CV format PDF
                </a>
              </li>
            </ul>
          </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);