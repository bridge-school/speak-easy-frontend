import React from 'react';

const RadioButton = props => {
  const options = ['Yes', 'No'];
  const radioButtons = options.map((option, i) => (
    <div key={i} className="pa2 tl">
      <input
        type="radio"
        name={props.name}
        value={option}
        onChange={props.handleChange}
      />
      {option}
    </div>
  ));
  return (
    <div className="w-100 pa2 tl">
      <label className="b" htmlFor={props.name}>
        {props.question}
      </label>
      {radioButtons}
    </div>
  );
};
RadioButton.defaultProps = { options: [] };
export default RadioButton;

/*
Example of props:
      {
        name: "compensated",
        question: "Are all speakers compensated at your event?",
        options:["Yes","No","Maybe"]
      }

*/
