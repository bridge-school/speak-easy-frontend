import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Hey this is Ashley's p tag</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
          <div>Hello team! :)</div>
          <div>Test</div>
          <h3>Heather's Test h3 for Test Commit!</h3>
        </header>
      </div>
    );
  }
}

export default App;
