import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Container } from 'react-bootstrap';

import Navigation from './components/Navigation';
import Admin from './components/Admin';
import About from './components/About';
import AddPublication from './components/AddPublication';
import Page404 from './components/Page404';
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navigation />
          {/*<Jumbotron />*/}
          <Container>
            <Switch>
              <Route exact path="/"/>
              <Route path="/about" component={About}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/admin" component={Admin}/>
              <Route path="/add-publication" component={AddPublication}/>
              <Route path="/signin" component={SignIn}/>
              <Route path="/signup" component={SignUp}/>
              <Route component={Page404} />
            </Switch>
          </Container>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;