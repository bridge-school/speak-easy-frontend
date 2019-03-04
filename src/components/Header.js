import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      Call for Diversity
      <Link to="/submit-conference">
        <Button />
      </Link>
    </header>
  );
};

export default Header;
