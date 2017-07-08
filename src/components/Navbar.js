import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-toggleable-md navbar-inverse mx-auto">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link to="/" className="navbar-brand"><img src={logo} /></Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/wreaths" className="nav-link">
                  Wreaths
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/trade-shows" className="nav-link">
                  Trade Shows
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>

          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
