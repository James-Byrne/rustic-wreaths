import React, { Component } from 'react';

class ImageBanner extends Component {
  bannerStyle = {
    'background': `url(${this.props.image}) fixed`,
    'background-size': 'cover',
    'background-color': '#2E3138',
    'paddingTop': '175px',
    'paddingBottom': '100px'
  };

  render() {
    return (
      <div style={this.bannerStyle} className="text-center">
        <h1>{this.props.header}</h1>
      </div>
    )
  }
}

export default ImageBanner;
