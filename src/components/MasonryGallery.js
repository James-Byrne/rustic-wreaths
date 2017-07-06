import React, { Component } from 'react';

import m1 from '../images/masonry/masonry-1.jpg';
import m2 from '../images/masonry/masonry-2.jpg';
import m3 from '../images/masonry/masonry-3.jpg';
import m4 from '../images/masonry/masonry-4.jpg';
import m5 from '../images/masonry/masonry-5.jpg';
import m6 from '../images/masonry/masonry-6.jpg';
import m7 from '../images/masonry/masonry-7.jpg';
import m8 from '../images/masonry/masonry-8.jpg';
import m9 from '../images/masonry/masonry-9.jpg';
import m10 from '../images/masonry/masonry-10.jpg';
import m11 from '../images/masonry/masonry-11.jpg';
import m12 from '../images/masonry/masonry-12.jpg';
import m13 from '../images/masonry/masonry-13.jpg';
import m14 from '../images/masonry/masonry-14.jpg';
import m15 from '../images/masonry/masonry-15.jpg';
import m16 from '../images/masonry/masonry-16.jpg';
import m17 from '../images/masonry/masonry-17.jpg';

class MasonryGallery extends Component {
  render() {
    return (
      <div className="masonry-gallery container-fluid">
        <div className="row">
          <div className="col text-center">
            <h4>Our Wreaths</h4>
          </div>
        </div>
        <div className="masonry">
          <div className="item"><img alt="" src={m1}/></div>
          <div className="item"><img alt="" src={m2}/></div>
          <div className="item"><img alt="" src={m3}/></div>
          <div className="item"><img alt="" src={m4}/></div>
          <div className="item"><img alt="" src={m5}/></div>
          <div className="item"><img alt="" src={m6}/></div>
          <div className="item"><img alt="" src={m7}/></div>
          <div className="item"><img alt="" src={m8}/></div>
          <div className="item"><img alt="" src={m9}/></div>
          <div className="item"><img alt="" src={m10}/></div>
          <div className="item"><img alt="" src={m11}/></div>
          <div className="item"><img alt="" src={m12}/></div>
          <div className="item"><img alt="" src={m13}/></div>
          <div className="item"><img alt="" src={m14}/></div>
          <div className="item"><img alt="" src={m15}/></div>
          <div className="item"><img alt="" src={m16}/></div>
          <div className="item"><img alt="" src={m17}/></div>
        </div>
      </div>
    )
  }
}

export default MasonryGallery;
