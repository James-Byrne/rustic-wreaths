import React, { Component } from 'react';
import FindUs from '../components/FindUs.js';
import ImageBanner from '../components/ImageBanner.js';

import BannerImage from '../images/about-background.jpg';

class About extends Component {
  render() {
    return (
      <div>
        <ImageBanner header="About Us" image={BannerImage}/>

        <div className="about-page container-fluid">

          <div className="row">
            <div className="col-12 col-md-10 col-lg-6 mx-auto">
              <p>
                We design and handcraft high quality Noble Fir wreaths for wholesale. Rustic Wreaths is a sister company to Forest Fresh Christmas Tree farms and this partnership provides us with a continual supply of foliage. We are environmentally responsible and fully support sustainability by replanting trees every year.
              </p>

              <br/>

              <p>Our Wreaths</p>
              <p>
                Rustic Wreaths 2016 Christmas Collection wreaths are beautifully handcrafted using fresh Fragrant Noblis Fir foliage.
              </p>

              <ol>
                <li>
                  Our gold bell and natural cones wreath is stylish and elegant and will enhance any front door.
                </li>
                <li>
                  The Tartan Ribbon is very traditional and adds a touch of colour to the festive season.
                </li>
                <li>
                  The Robin wreath is a classic design and the white cones compliment the colours of the Robin Redbreast.
                </li>
                <li>
                  Our Silver and white cone wreath is tasteful and artistic.
                </li>
                <li>
                  This is a simple yet sophisticated wreath decorated with natural or white cones
                </li>
                <li>
                  We offer plain wreaths for creative people to add their own touch of flair.
                </li>
              </ol>

              <p>
                All of the above wreaths are made on 10” bases and the foliage expands to 14”. We can supply larger wreaths on special requests. Please note that we only supply wholesale however if you would like to purchase one of our wreaths please contact us and we will send you details of your nearest stockist.
              </p>
            </div>
          </div>

        </div>

        <FindUs/>
      </div>
    )
  }
}

export default About;
