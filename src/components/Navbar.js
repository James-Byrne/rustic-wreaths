import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-toggleable-md navbar-inverse mx-auto">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand" href="#">Logo here</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/wreaths">Wreaths</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/trade-shows">Trade Shows</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>

          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
