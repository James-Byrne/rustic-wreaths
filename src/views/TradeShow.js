import React, { Component } from 'react';
import FindUs from '../components/FindUs.js';
import ImageBanner from '../components/ImageBanner.js';

import BannerImage from '../images/trade-show-banner.jpg';

import img1 from '../images/tradeshows/tradeshows-1.jpg';
import img2 from '../images/tradeshows/tradeshows-2.jpg';
import img3 from '../images/tradeshows/tradeshows-3.jpg';
import img4 from '../images/tradeshows/tradeshows-4.jpg';
import img5 from '../images/tradeshows/tradeshows-5.jpg';
import img6 from '../images/tradeshows/tradeshows-6.jpg';
import img7 from '../images/tradeshows/tradeshows-7.jpg';
import img8 from '../images/tradeshows/tradeshows-8.jpg';

class TradeShow extends Component {
  render() {
    return (
      <div>
        <ImageBanner header="Trade Shows" image={BannerImage}/>

        <div className="trade-show-page container-fluid">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-6 mx-auto">

              <div className="row">

                <div className="col-12 col-lg-6">
                  <h5>Road Shows 2017</h5>
                  <p>We will be showcasing our complete portfolio at the following locations.</p>
                  <br/>
                  <p>
                    IPM Essen Germany -Hall 9 Booth B O7
                    <br/>
                    January 24th – 27th
                  </p>
                  <br/>
                  <p>
                    Salon de Vegetal
                    <br/>
                    July 20th – 22nd
                    <br/>
                    Nantes, France
                  </p>
                  <p>
                    Glas
                    <br/>
                    July 2017
                    <br/>
                    Citywest Dublin 24
                    <br/>
                    Ireland
                    <br/>
                    Website: http://www.glasireland.ie
                  </p>
                  <p>
                    Four Oaks Trade Show – Stand E105 & 106
                    <br/>
                    September 5th and 6th
                    <br/>
                    Maccelsfield,
                    <br/>
                    United Kingdom
                    <br/>
                    Website www.fouroaks-tradeshow.com/
                  </p>
                  <p>
                    Glee Horticultural Trade Show
                    <br/>
                    September 11th – 13th 2017
                    <br/>
                    NEC
                    <br/>
                    Birmingham
                    <br/>
                    United Kingdom
                  </p>
                </div>

                <div className="col-12 col-lg-6">
                  <div className="masonry-2">
                    <div className="item"><img alt="" src={img1}/></div>
                    <div className="item"><img alt="" src={img2}/></div>
                    <div className="item"><img alt="" src={img3}/></div>
                    <div className="item"><img alt="" src={img4}/></div>
                    <div className="item"><img alt="" src={img5}/></div>
                    <div className="item"><img alt="" src={img6}/></div>
                    <div className="item"><img alt="" src={img7}/></div>
                    <div className="item"><img alt="" src={img8}/></div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        <FindUs/>
      </div>
    )
  }
}

export default TradeShow;
