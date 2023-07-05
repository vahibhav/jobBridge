import { Link, Router } from "react-router-dom";
import "./header.css";
import "bootstrap/dist/js/bootstrap.js";
import React, { useState } from 'react'

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          JobBridge.in
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded={toggle}
          aria-label="Toggle navigation"

          onClick={() => { setToggle(!toggle) }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active " to="/">
                Home
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jobs">
                Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ ">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
