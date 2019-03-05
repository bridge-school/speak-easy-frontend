import React, { Component } from 'react';
import 'tachyons';

import './App.scss';

import Header from './components/Header';
import Datepicker from './components/Datepicker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Datepicker />
      </div>
    );
  }
}

export default App;
