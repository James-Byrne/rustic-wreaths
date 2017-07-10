import React, { Component } from 'react';
import FindUs from '../components/FindUs.js';
import ImageBanner from '../components/ImageBanner.js';

import BannerImage from '../images/trade-show-banner.jpg';

import img1 from '../images/wreaths/wreaths-1.jpg';
import img2 from '../images/wreaths/wreaths-2.jpg';
import img3 from '../images/wreaths/wreaths-3.jpg';
import img4 from '../images/wreaths/wreaths-4.jpg';
import img5 from '../images/wreaths/wreaths-5.jpg';
import img6 from '../images/wreaths/wreaths-6.jpg';


class Wreaths extends Component {
  render() {
    return (
      <div>
        <ImageBanner header="Trade Shows" image={BannerImage}/>

        <div className="wreaths-page container-fluid">
          <div className="row">
            <div className="col-12 col-md-8 mx-auto">
              <h5>Our Wreaths</h5>
              <p>Rustic Wreaths 2016 Christmas Collection wreaths are beautifully handcrafted using fresh Fragrant Noblis Fir foliage.</p>
            </div>
          </div>

          <br/>

          <div className="row">
            <div className="col-12 col-md-8 mx-auto">

              <div className="masonry-3">
                <div className="item">
                  <img alt="" src={img1}/>
                </div>
                <p>Our gold bell and natural cones wreath is stylish and elegant and will enhance any front door.</p>

                <div className="item">
                  <img alt="" src={img2}/>
                </div>
                <p>The Tartan Ribbon is very traditional and adds a touch of colour to the festive season.</p>

                <div className="item">
                  <img alt="" src={img3}/>
                </div>
                <p>The Robin wreath is a classic design and the white cones compliment the colours of the Robin Redbreast.</p>

                <div className="item">
                  <img alt="" src={img4}/>
                </div>
                <p>Our Silver and white cone wreath is tasteful and artistic.</p>

                <div className="item">
                  <img alt="" src={img5}/>
                </div>
                <p>This is a simple yet sophisticated wreath decorated with natural or white cones.</p>

                <div className="item">
                  <img alt="" src={img6}/>
                </div>
                <p>We offer plain wreaths for creative people to add their own touch of flair.</p>
              </div>

            </div>
          </div>

          <br/>

          <div className="row">
            <div className="col-12 col-md-8 mx-auto">
              <p>All of the above wreaths are made on 10” bases and the foliage expands to 14”. We can supply larger wreaths on special requests. Please note that we only supply wholesale however if you would like to purchase one of our wreaths please contact us and we will send you details of your nearest stockist.</p>
            </div>
          </div>

        </div>

        <FindUs/>
      </div>

    )
  }
}

export default Wreaths;
