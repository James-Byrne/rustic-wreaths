import React, { Component } from 'react';
import showcase1 from '../images/showcase/showcase-1.jpg';
import showcase2 from '../images/showcase/showcase-2.jpg';
import showcase3 from '../images/showcase/showcase-3.jpg';
import showcase4 from '../images/showcase/showcase-4.jpg';
import showcase5 from '../images/showcase/showcase-5.jpg';
import showcase6 from '../images/showcase/showcase-6.jpg';

class Showcase extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <img src={showcase1}/>
          </div>

          <div className="col">
            <img src={showcase2}/>
          </div>

          <div className="col">
            <img src={showcase3}/>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <img src={showcase4}/>
          </div>

          <div className="col">
            <img src={showcase5}/>
          </div>

          <div className="col">
            <img src={showcase6}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Showcase;
