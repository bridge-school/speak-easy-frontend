import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

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
