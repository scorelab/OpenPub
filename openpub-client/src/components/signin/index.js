import React, { Component } from 'react';
import '../../styles/css/bootstrap.css'
import '../../styles/css/style.css'
import '../../styles/css/font-awesome.min.css'

class SignIn extends Component {
  render() {
    return (
      <div className="modal-body align-w3">
        <form action="#" method="post" className="p-sm-3">
          <div className="form-group">
            <label htmlFor="recipient-name" className="col-form-label">Email</label>
            <input type="text" className="form-control" placeholder="Email" name="email" id="email"
              required="" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="col-form-label">Password</label>
            <input type="password" className="form-control" placeholder="*****" name="Password" id="password"
              required="" />
          </div>
          <div className="right-w3l">
            <a href="/home" className="form-control bg-theme" id="register_txt" value="Register"><p align="center">Sign In</p></a>
          </div>
          <div className="row sub-w3l my-3">
            <div className="col-sm-6 sub-w3layouts_hub">
              <input type="checkbox" id="brand1" value="" />
              <label htmlFor="brand1" className="text-secondary">
                <span></span>Remember me?</label>
            </div>
            <div className="col-sm-6 forgot-w3l text-sm-right">
              <a href="/forgot-password" className="text-secondary">Forgot Password?</a>
            </div>
          </div>
          <p className="text-center dont-do text-secondary">Don't have an account?
              <a href="/signup" className="text-theme-2 font-weight-bold">
              Sign up Now!!!</a>
          </p>
        </form>
      </div>
    );
  }
}

export default SignIn;