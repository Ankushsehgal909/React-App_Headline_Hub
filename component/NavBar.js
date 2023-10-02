import React, { Component } from "react";
import { Link } from "react-router-dom";
jsx
// NavBar component
export class NavBar extends Component {
 render() {
    return (
      <div>
        {/* Navbar container */}
        <nav className="navbar navbar-expand-lg Navbar-bg ">
          <div className="container-fluid">
            {/* Navbar brand */}
            <Link className="navbar-brand" to="/Headline-Hub">
              Headline Hub
            </Link>
            {/* Navbar toggler */}
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
            {/* Navbar content */}
            <div
              className="collapse navbar-collapse Navbar-content"
              id="navbarSupportedContent"
            >
              {/* Navbar links */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-ele">
                <li className="nav-item navbar-select ">
                 <Link className="nav-link Navbar-item " to="/business">
                    Business
                 </Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link" to="/entertainment">
                    Entertainment
                 </Link>
                </li>
                <li className="nav-item ">
                 <Link className="nav-link" to="/general">
                    General
                 </Link>
                </li>
                <li className="nav-item ">
                 <Link className="nav-link" to="/health">
                    Health
                 </Link>
                </li>
                <li className="nav-item ">
                 <Link className="nav-link" to="/science">
                    Science
                 </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/sport">
                    Sport
                  </Link>
                </li>
                <li className="nav-item  ">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
