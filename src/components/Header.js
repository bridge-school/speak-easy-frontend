import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Header = ({ className, title }) => {
  return (
    <header className="bb br1 b--lavender pa3 bg-white f4 tl serif i">
      <div className="w-80 center mb2">
        Call for Diversity
        <Link to="/submit-conference">
          <div className="fr">
            <Button title="Submit Event" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
