import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from 'react-redux';

import "./App.css";

import { history } from './helpers';
import { routesConstants } from './constants';
import { alertActions } from './actions';
import { PrivateRoute } from './components';

import Navigation from './components/Navigation';
import Admin from './components/Admin';
import Page404 from './components/Page404';
import PasswordChange from './components/PasswordChange';
import PasswordForget from './components/PasswordForget';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import SignUp from './components/SignUp';
import Footer from './components/Footer';


class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {

    const { alert } = this.props;
    return (
        <div>
          <Navigation />
          <Router>
            <Route path={routesConstants.SIGN_UP} component={SignUp} />
            <Route path={routesConstants.SIGN_IN} component={SignIn} />
            <Route path={routesConstants.SIGN_OUT} component={SignOut} />

            <Route path={routesConstants.PASSWORD_CHANGE} component={PasswordChange} />
            <Route path={routesConstants.PASSWORD_FORGET} component={PasswordForget} />
            <Route path={routesConstants.Admin} component={Admin} />
            <Route path='*' exact={true} component={Page404} />
          <Footer />
          </Router>
        </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

export default connect(mapStateToProps(App));