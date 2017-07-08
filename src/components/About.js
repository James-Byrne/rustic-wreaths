import React, { Component } from 'react';
import Background from '../images/h1-bg.png';

class About extends Component {
  render() {
    return (
      <div className="about container-fluid">
        <div className="row">
          <div className="col col-md-8 mx-auto text-center">
            <h6>ABOUT US</h6>
            <img alt="" className="title-arrow" src={Background}></img>
            <p>
              We design and handcraft high quality Noble Fir wreaths for wholesale. Rustic Wreaths is a sister company to Forest Fresh Christmas Tree farms and this partnership provides us with a continual supply of foliage. We are environmentally responsible and fully support sustainability by replanting trees every year.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
