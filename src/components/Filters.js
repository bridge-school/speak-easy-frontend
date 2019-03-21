import React from 'react';
import classNames from 'classnames';
import DropDown from './DropDown';

const FilterButton = ({ children, isActive, id, toggleFilter }) => {
  const buttonClasses = classNames('f6', 'br2', 'bright-blue', 'mr2', 'h2', {
    'b--bright-blue': isActive,
    'bg-white': !isActive,
    grey: !isActive
  });

  return (
    <button className={buttonClasses} onClick={() => toggleFilter(id)}>
      {children}
    </button>
  );
};

const Filters = ({ toggleFilter, filters }) => {
  const {
    compensation: hasCompensation,
    codeOfConduct: hasCodeOfConduct,
    diversityScholarship: hasDiversityScholarship
  } = filters;

  const buttons = [
    {
      id: 'compensation',
      name: 'Compensation',
      isActive: hasCompensation
    },
    {
      id: 'codeOfConduct',
      name: 'Code of Conduct',
      isActive: hasCodeOfConduct
    },
    {
      id: 'diversityScholarship',
      name: 'Diversity Scholarship',
      isActive: hasDiversityScholarship
    }
  ];

  return (
    <div className="flex items-center flex-wrap">
      <label className="fw2 w-100 tl mb2">Filter By</label>
      {buttons.map(button => (
        <FilterButton toggleFilter={toggleFilter} {...button}>
          {button.name}
        </FilterButton>
      ))}
    </div>
  );
};

export default Filters;
