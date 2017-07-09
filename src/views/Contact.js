import React, { Component } from 'react';
import FindUs from '../components/FindUs.js';
import ContactForm from '../components/ContactForm.js';
import ImageBanner from '../components/ImageBanner.js';

import BannerImage from '../images/contact-banner.jpg';

class Contact extends Component {
  render() {
    return (
      <div>
        <ImageBanner header="Contact" image={BannerImage}/>
        <ContactForm/>
        <FindUs/>
      </div>
    )
  }
}

export default Contact;
