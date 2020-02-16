import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper light-blue darken-2">
            <a href="#" className="brand-logo">
              OpenPub
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#">publications</a>
              </li>
              <li>
                <a href="/signin">Login</a>
              </li>
              <li>
                <a href="#">SignUp</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;