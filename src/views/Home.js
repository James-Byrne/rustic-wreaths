import React, { Component } from 'react';

import Hero from '../components/Hero.js';
import Showcase from '../components/Showcase.js';
import About from '../components/About.js';

class Home extends Component {
  render() {
    return (
      <div>
        <Hero/>
        <Showcase/>
        <About/>
      </div>
    )
  }
}

export default Home;
