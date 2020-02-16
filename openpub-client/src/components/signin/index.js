import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../App.css'

class SignIn extends Component {
  
  render() {
    return (
        <div className=" container ">

<form>
      <div className="row">
        <div className="input-field row  ">
          <i className="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" className="validate"/>
          <label for="icon_prefix">Username</label>
        </div>
        <div className="input-field row">
          <i className="material-icons prefix">lock</i>
          <input id="icon_lock" type="password" className="validate"/>
          <label for="icon_lock">Password</label>
        </div>
      </div>
    </form>
         <div className="row center"> <h4>Or</h4></div>
          <div className="row center">
          <Link to="/auth/google"><img alt="Google Login" src='https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png'/></Link>
        </div>
        </div>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  
)(SignIn);
