import React, { Component } from 'react';
import FindUs from '../components/FindUs.js';
import ImageBanner from '../components/ImageBanner.js';

import BannerImage from '../images/about-background.jpg';

class About extends Component {
  render() {
    return (
      <div>
        <ImageBanner header="About Us" image={BannerImage}/>
        <FindUs/>
      </div>
    )
  }
}

export default About;
