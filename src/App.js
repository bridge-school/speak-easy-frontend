import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Header} />
        <Route path="/submit-conference" component={Form} />
      </div>
    );
  }
}

export default App;
