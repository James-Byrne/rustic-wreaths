import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <div className="contact-form container-fluid">
        <div className="row">
          <div className="col-5 mx-auto form-group">
            <label className="control-label">Your name (required)</label>
            <input type="text" className="form-control" />
          </div>
        </div>

        <div className="row">
          <div className="col-5 mx-auto form-group">
            <label className="control-label">Your email (required)</label>
            <input type="text" className="form-control" />
          </div>
        </div>

        <div className="row">
          <div className="col-5 mx-auto form-group">
            <label className="control-label">Your Message</label>
            <textarea type="text" className="form-control" rows="10" />
          </div>
        </div>

        <br/>

        <div className="row">
          <div className="col-5 mx-auto form-group">
            <button className="btn btn-primary btn-lg btn-block">Submit</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactForm;
