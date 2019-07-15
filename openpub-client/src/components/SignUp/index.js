import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <div className="modal-body align-w3">
          <div className="form-group">
            <label htmlFor="recipient-name" className="col-form-label">First Name</label>
            <input type="text" className="form-control" placeholder="First Name" name="first-name" id="first-name"
              required="" />
          </div>
          <div className="form-group">
            <label htmlFor="recipient-name" className="col-form-label">Last Name</label>
            <input type="text" className="form-control" placeholder="Last Name" name="last-name" id="last-name"
              required="" />
          </div>
          <div className="form-group">
            <label htmlFor="recipient-email" className="col-form-label">Email</label>
            <input type="email" className="form-control" placeholder="Email" name="email"
              id="email"
              required="" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="col-form-label">Password</label>
            <input type="password" className="form-control" placeholder="******" name="password" id="password"
              required="" />
          </div>
          <div className="form-group">
            <label htmlFor="password2" className="col-form-label">Confirm Password</label>
            <input type="password" className="form-control" placeholder="******" name="confirm-password"
              id="confirm-password"
              required="" />
          </div>
          <div className="sub-w3l">
            <div className="sub-w3layouts_hub">
              <input type="checkbox" id="brand2" value="" />
              <label htmlFor="brand2" className="mb-3 text-secondary">
                <span></span>I Accept to the Terms & Conditions</label>
            </div>
          </div>
          <div className="right-w3l">
            <a href="/signup-confirm" className="form-control bg-theme" id="signup" value="signup"><p align="center">Sign Up</p></a>
          </div>
      </div>
    );
  }
}

export default SignUp;