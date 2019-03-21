import React from 'react';
import classNames from 'classnames';

const FilterButton = ({ children, isActive, id, toggleFilter }) => {
  const buttonClasses = classNames('f6', 'pa2', 'br2', 'white', 'mh1', {
    'bg-bright-blue': isActive,
    'bg-white': !isActive,
    'o-80': !isActive,
    'bright-blue': !isActive
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
    <div className="flex items-center">
      <div className="fw2">Filter By:</div>
      {buttons.map(button => (
        <FilterButton toggleFilter={toggleFilter} {...button}>
          {button.name}
        </FilterButton>
      ))}
    </div>
  );
};

export default Filters;
