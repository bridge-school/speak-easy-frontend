import React, { Component } from 'react';
import 'tachyons';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/Header';
import Form from './components/Form';
import ConferenceList from './components/ConferenceList';
import FormSuccess from './components/FormSuccess';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/" component={Header} />
            <Route exact path="/" component={ConferenceList} />
            <Route path="/submit-conference" component={Form} />
            <Route path="/success" component={FormSuccess} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
