import React from 'react';

const DropDown = props => {
  return (
    <div className=" w-100 sans-serif pa0 tr fw2 mh0 mt2 mb3">
      <label htmlFor="filter-select">Filter search results by: </label>

      <select id="filter-select" onChange={props.onChange}>
        <option value="default">--Please choose an option--</option>
        <option value="submissionDate">Submission Date</option>
      </select>
    </div>
  );
};

export default DropDown;
