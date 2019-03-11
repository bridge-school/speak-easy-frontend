import React, { Component } from 'react';
import 'tachyons';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/Header';
import Form from './components/Form';
import ConferenceList from './components/ConferenceList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/" component={Header} />
            <Route exact path="/" component={ConferenceList} />
            <Route path="/submit-conference" component={Form} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
