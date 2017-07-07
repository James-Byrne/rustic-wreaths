import React, { Component } from 'react';

import Hero from '../components/Hero.js';
import Showcase from '../components/Showcase.js';
import About from '../components/About.js';
import MasonryGallery from '../components/MasonryGallery.js';
import FollowUs from '../components/FollowUs.js';
import ContactForm from '../components/ContactForm.js';

class Home extends Component {
  render() {
    return (
      <div>
        <Hero/>
        <Showcase/>
        <About/>
        <MasonryGallery/>
        <FollowUs/>
        <ContactForm/>
      </div>
    )
  }
}

export default Home;
