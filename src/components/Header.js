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
    const backBtn = (
      <Link to="/" onClick={this.handleBackButtonClick}>
        <div className="fr">
          <Button title="Back to Conferences" />
        </div>
      </Link>
    );
    const submitBtn = (
      <Link to="/submit-conference" onClick={this.handleButtonClick}>
        <div className="fr">
          <Button title="Submit Event" />
        </div>
      </Link>
    );
    const btn = this.state.isAppOnForm ? backBtn : submitBtn;
    return (
      <header className="bb br1 b--lavender pa3 bg-white f4 tl serif i">
        <h1 className="w-60 f3 center ma0 mb2 normal">
          <Link
            to="/"
            className="black no-underline"
            onClick={this.handleBackButtonClick}
          >
            Call for Diversity
          </Link>
          {btn}
        </h1>
      </header>
    );
  }
}

export default Header;
