import React from 'react';

const Button = props => {
  return (
    <button className="ba br2 b--grey pa2 bg-bright-blue white f6 sans-serif">
      {props.title}
    </button>
  );
};

export default Button;
