import React, { Component } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAppOnForm: false
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  handleButtonClick() {
    this.setState({ isAppOnForm: true });
  }
  handleBackButtonClick() {
    this.setState({ isAppOnForm: false });
  }
  render() {
    const submitEventButtonVisibility = this.state.isAppOnForm
      ? { display: 'none' }
      : {};
    const backToConferencesButtonVisibility = this.state.isAppOnForm
      ? {}
      : { display: 'none' };
    console.log('s', submitEventButtonVisibility);
    console.log('b', backToConferencesButtonVisibility);
    return (
      <header className="bb br1 b--lavender pa3 bg-white f4 tl serif i">
        <h1 className="w-60 f3 center ma0 mb2 normal">
          <Link to="/" className="black no-underline">
            Call for Diversity
          </Link>
          <Link
            to="/"
            style={backToConferencesButtonVisibility}
            onClick={this.handleBackButtonClick}
          >
            <div className="fr">
              <Button title="Back to Conferences" />
            </div>
          </Link>
          <Link
            to="/submit-conference"
            onClick={this.handleButtonClick}
            style={submitEventButtonVisibility}
          >
            <div className="fr">
              <Button title="Submit Event" />
            </div>
          </Link>
        </h1>
      </header>
    );
  }
}

export default Header;
