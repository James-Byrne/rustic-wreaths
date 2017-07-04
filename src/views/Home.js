import React, { Component } from 'react';

import Hero from '../components/Hero.js';
import Showcase from '../components/Showcase.js';

class Home extends Component {
  render() {
    return (
      <div>
        <Hero/>
        <Showcase/>
      </div>
    )
  }
}

export default Home;
