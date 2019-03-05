import React from 'react';

const TextInput = ({
  title,
  name,
  inputType,
  value,
  handleChange,
  onFocus,
  onKeyUp,
  onClick,
  onBlur,
  className
}) => {
  return (
    <div>
      <label htmlFor={name}>{title}</label>
      <input
        id={name}
        name={name}
        type={inputType}
        value={value}
        onChange={handleChange}
        onFocus={onFocus}
        onKeyUp={onKeyUp}
        onClick={onClick}
        onBlur={onBlur}
        className="ba br1 b--grey pa2"
      />
    </div>
  );
};

export default TextInput;
