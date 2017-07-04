import React, { Component } from 'react';

import Hero from '../components/Hero.js';
import Navbar from '../components/Navbar.js';
import Showcase from '../components/Showcase.js';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar/>
        <Hero/>
        <Showcase/>
      </div>
    )
  }
}

export default Home;
