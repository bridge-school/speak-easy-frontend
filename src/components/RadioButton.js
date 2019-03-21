import React from 'react';

const RadioButton = ({ name, handleChange, question }) => {
  const options = ['Yes', 'No'];
  const radioButtons = options.map((option, i) => (
    <div key={i} className="pa2 tl">
      <input
        type="radio"
        name={name}
        value={option}
        onChange={handleChange}
        required
      />
      {option}
    </div>
  ));
  return (
    <div className="w-100 pa2 tl">
      <label className="b" htmlFor={name}>
        {question}
      </label>
      {radioButtons}
    </div>
  );
};
RadioButton.defaultProps = { options: [] };
export default RadioButton;
