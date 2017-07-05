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
      <div className="showcase container-fluid">
        <div className="row">
          <div className="col text-center">
            <h4>DESIGNED FOR PERFECTION</h4>
          </div>
        </div>

        <div className="row">
          <div className="col col-auto mx-auto">
            <img alt="" src={showcase1}/>
          </div>

          <div className="col col-auto mx-auto">
            <img alt="" src={showcase2}/>
          </div>

          <div className="col col-auto mx-auto">
            <img alt="" src={showcase3}/>
          </div>
        </div>

        <div className="row">
          <div className="col col-auto mx-auto">
            <img alt="" src={showcase4}/>
          </div>

          <div className="col col-auto mx-auto">
            <img alt="" src={showcase5}/>
          </div>

          <div className="col col-auto mx-auto">
            <img alt="" src={showcase6}/>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col text-center">
            <button className="btn btn-primary btn-lg">Contact</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Showcase;
