import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Header = ({ location }) => {
  const submitBtn = (
    <Link to="/submit-conference">
      <div className="fr">
        <Button title="Submit Event" />
      </div>
    </Link>
  );
  const backBtn = (
    <Link to="/">
      <div className="fr">
        <Button title="Back to Conferences" />
      </div>
    </Link>
  );
  const btn = location.pathname === '/' ? submitBtn : backBtn;
  return (
    <header className="bb br1 b--lavender pa3 bg-white f4 tl serif i">
      <h1 className="w-60-ns f3 center ma0 mb2 normal">
        <Link to="/" className="black no-underline">
          Call for Diversity
        </Link>
        {btn}
      </h1>
    </header>
  );
};

export default Header;
