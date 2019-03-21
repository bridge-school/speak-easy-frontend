import React from 'react';

const DropDown = props => {
  return (
    <div className="flex items-center flex-wrap flex-grow-1 flex-shrink-0 w-40-ns">
      <label htmlFor="filter-select" className="fw2 mb2">
        Sort by
      </label>
      <select
        id="filter-select"
        onChange={props.onChange}
        className="h2 f6 bg-white b--bright-blue bright-blue w-100"
      >
        <option value="default">Please choose an option</option>
        <option value="submissionDueDate">Submission Deadline</option>
        <option value="eventDate">Event Date</option>
        <option value="eventName">Event Name</option>
      </select>
    </div>
  );
};

export default DropDown;
