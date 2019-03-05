import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/" component={Header} />
            <Route path="/submit-conference" component={Form} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
