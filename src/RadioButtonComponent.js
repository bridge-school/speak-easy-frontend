import React from "react";

const RadioButtonComponent = props => {
  const radioButtons = props.options.map(option => (
    <span>
      <input type="radio" name={props.name} value={option} onChange={props.handleChange}/>
      {option}
    </span>
  ));
  return (
    <div>
      <label htmlFor={props.name}>{props.question}</label>
      <br />
      {radioButtons}
    </div>
  );
};

export default RadioButtonComponent;
/*
Example of props:
      {
        name: "compensated",
        question: "Are all speakers compensated at your event?",
        options:["Yes","No","Maybe"]
      }
*/