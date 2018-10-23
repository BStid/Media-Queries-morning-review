import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    sideNav: false,
    links: ['Home', 'About', 'Contact']
  };

  render() {
    const { sideNav, links } = this.state;

    const linkMap = links.map((e, i) => {
      return (
        <div key={i}>
          <p>{e}</p>
        </div>
      );
    });
    return (
      <div className="app">
        <nav className="nav">
          <h2>Menu</h2>
          <div className="main_nav">{linkMap}</div>
          <div className="hamburger">
            <div
              className="hamburger_icon"
              onClick={() => this.setState({ sideNav: !sideNav })}
            >
              <div className="burger burger1" />
              <div className="burger burger2" />
              <div className="burger burger3" />
            </div>
            {sideNav && <div className="sidenav">{linkMap}</div>}
          </div>
        </nav>
        <div className="loading_bar">
          <h2>Loading bar</h2>
          <div className="container">
            <div className="bar first" />
            <div className="bar second" />
            <div className="bar third" />
            <div className="bar fourth" />
            <div className="bar fifth" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
