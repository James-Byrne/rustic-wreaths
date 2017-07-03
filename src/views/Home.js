import React, { Component } from 'react';

import Hero from '../components/Hero.js';
import Navbar from '../components/Navbar.js';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar/>
        <Hero/>
      </div>
    )
  }
}

export default Home;
