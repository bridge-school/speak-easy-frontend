import React from 'react';

const TextInput = props => {
  return (
    <div>
      <label htmlFor={props.name}>{props.title}</label>
      <input
        id={props.name}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default TextInput;
