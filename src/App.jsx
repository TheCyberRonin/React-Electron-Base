import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React/Electron</h2>
        </div>
        <p className="App-intro">
          2 time back to back Blockbuster gaming champion
        </p>
        <a href="http://google.com">Link that will be bad in this boilerplate</a>
      </div>
    );
  }
}

export default App;
