import React, { Component } from 'react';

class PasswordForget extends Component {
  render() {
    return (
      <div className="modal-body align-w3">
      <form action="#" method="post" className="p-sm-3">
        <div className="form-group">
          <label htmlFor="email" className="col-form-label">Email</label>
          <input type="text" className="form-control" placeholder="Email" name="email" id="email"
            required="" />
        </div>
        <div className="right-w3l">
          <a href="/reset-password" className="form-control bg-theme" id="register_txt" value=""><p align="center">Rest Passsword</p></a>
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

export default PasswordForget;