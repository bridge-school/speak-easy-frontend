import React from 'react';

const DropDown = props => {
  return (
    <div className="flex items-center flex-wrap flex-grow-1">
      <label htmlFor="filter-select" className="fw2 mb2">
        Sort by
      </label>
      <select
        id="filter-select"
        onChange={props.onChange}
        className="h2 f6 bg-white b--bright-blue bright-blue pa2 w-100">
        <option value="default">Please choose an option</option>
        <option value="submissionDate">Submission Deadline</option>
      </select>
    </div>
  );
};

export default DropDown;
