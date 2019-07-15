import React, { Component } from 'react';
import '../../styles/css/bootstrap.css'
import '../../styles/css/font-awesome.min.css'
import '../../styles/css/style.css'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="column" id="column_1">
            <div className="card">
              <h2>Filter year</h2>
              <hr />
              <button className="year-btn">2019</button>
              <button className="year-btn">2018</button>
              <button className="year-btn">2017</button>
              <button className="year-btn">2016</button>
              <button className="year-btn">2015</button>
            </div>
          </div>

          <div className="column" id="column_2">
            <div className="card2">
              <h2>2019</h2>
              <hr />
              <a href="/view_document"><div className="card-body"><p className="card-text" align="left">Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lacus vel facilisis volutpat est velit egestas dui id. Ullamcorper dignissim cras
                      tincidunt lobortis feugiat vivamus at. Leo vel fringilla est ullamcorper eget nulla
                          facilisi.</p>
                <br /><p className="author" align="left">&emsp;lobortis feugiat, 2019</p></div></a>
              <a href="/view_document"><div className="card-body"><p className="card-text" align="left">Nulla aliquet enim tortor at
                      auctor. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Morbi
                      tristique senectus et netus et malesuada. Aliquam ut porttitor leo a diam sollicitudin tempor
                      id eu. Non quam lacus suspendisse faucibus interdum. Magna fringilla urna porttitor rhoncus
                          dolor purus non enim. Arcu non odio euismod lacinia at quis risus.</p>
                <br /><p className="author" align="left">&emsp;ipsum faucibus, 2019</p></div></a>
              <a href="/view_document"><div className="card-body"><p className="card-text" align="left">Urna nunc id cursus metus aliquam
                      eleifend mi in nulla. Turpis egestas pretium aenean pharetra. At augue eget arcu dictum varius
                      duis at consectetur lorem. Rhoncus est pellentesque elit ullamcorper. Tellus orci ac auctor
                      augue. Posuere urna nec tincidunt praesent semper feugiat. Dignissim diam quis enim lobortis
                          scelerisque.</p>
                <br /><p className="author" align="left">&emsp;morbi tristique, 2019</p></div></a>
              <a href="/view_document"><div className="card-body"><p className="card-text" align="left">Tellus at urna condimentum mattis
                      pellentesque id nibh tortor. Sit amet tellus cras adipiscing enim eu. Malesuada fames ac
                      turpis egestas integer eget. Quam pellentesque nec nam aliquam sem. Tristique senectus et
                          netus et malesuada fames ac turpis.</p>
                <br /><p className="author" align="left">&emsp;aliquet sagittis, 2019</p></div></a>
              <a href="/view_document"><div className="card-body"><p className="card-text" align="left">Mi ipsum faucibus vitae aliquet
                      nec. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Sed felis
                      eget velit aliquet sagittis id consectetur. Pellentesque habitant morbi tristique senectus et
                          netus. A lacus vestibulum sed arcu non odio. Etiam sit amet nisl purus in.</p>
                <br /><p className="author" align="left">&emsp;tempor orci, 2019</p></div></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;