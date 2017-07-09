import React, { Component } from 'react';

class ImageBanner extends Component {
  bannerStyle = {
    'background': `url(${this.props.image}) fixed`,
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