import React, { Component } from 'react';
import 'tachyons';
import Header from './components/Header';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <button className="bg-bright-blue">Mint green</button>
      </div>
    );
  }
}

export default App;
