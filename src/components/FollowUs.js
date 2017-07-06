import React, { Component } from 'react';

class FollowUs extends Component {
  render() {
    return (
      <div className="follow-us container-fluid">

        <div className="row">
          <div className="col text-center">
            <i className="fa fa-tree"></i>
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <button className="btn btn-lg btn-outline-secondary">Follow Us</button>
          </div>
        </div>

      </div>
    )
  }
}

export default FollowUs;
