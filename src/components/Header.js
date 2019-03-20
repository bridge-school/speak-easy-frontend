import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bb br1 b--lavender pa3 bg-white f4 tl serif i">
      <h1 className="w-60 f3 center ma0 mb2 normal">
        <Link to="/" className="black no-underline">
          Call for Diversity
        </Link>
        <Link to="/submit-conference">
          <div className="fr">
            <Button title="Submit Event" />
          </div>
        </Link>
      </h1>
    </header>
  );
};

export default Header;
