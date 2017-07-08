import React, { Component } from 'react';
import Background from '../images/h1-bg.png';

class FindUs extends Component {
  render() {
    return (
      <div className="find-us container-fluid">
        <div className="row">
          <div className="col text-center">
            <h5>Find Us</h5>
            <img alt="" className="title-arrow" src={Background}></img>
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <div className="card">
              <div className="card-block">
                <h6>Post</h6>
                <p>Rustic Wreaths, 185 Rathmines Road Lower, Dublin 6</p>
              </div>
            </div>
          </div>

          <div className="col text-center">
            <div className="card">
              <div className="card-block">
                <h6>Mobile</h6>
                <p>Rustic Wreaths, 185 Rathmines Road Lower, Dublin 6</p>
              </div>
            </div>
          </div>

          <div className="col text-center">
            <div className="card">
              <div className="card-block">
                <h6>Post</h6>
                <p>Rustic Wreaths, 185 Rathmines Road Lower, Dublin 6</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FindUs;
