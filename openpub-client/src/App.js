import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navigation from './components/Navigation';
import Admin from './components/Admin';
import Page404 from './components/Page404';
import PasswordChange from './components/PasswordChange';
import PasswordForget from './components/PasswordForget';
import SignIn from './components/signin';
import SignOut from './components/signout';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';


import * as ROUTES from './constants/routes';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
    console.log('jj');
    
  }
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div>
            <Navigation/>
            <Switch>
                <Route path={ROUTES.SIGN_UP} component={SignUp}/>
                <Route path={ROUTES.SIGN_IN} component={SignIn}/>
                <Route path={ROUTES.SIGN_OUT} component={SignOut}/>

                <Route path={ROUTES.PASSWORD_CHANGE} component={PasswordChange}/>
                <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget}/>
                <Route path={ROUTES.ADMIN} component={Admin}/>
                <Route path='*' exact={true} component={Page404}/>
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
    </Provider>
    );
  }
}
export default App;