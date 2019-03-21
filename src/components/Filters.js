import React from 'react';
import classNames from 'classnames';

const FilterButton = ({ children, isActive, id, toggleFilter }) => {
  const buttonClasses = classNames('f6', 'br2', 'bright-blue', 'mr2', 'h2', {
    'b--bright-blue': isActive,
    'bg-dark-grey': !isActive,
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
    <div className="flex items-center flex-wrap w-60-ns">
      <label className="fw2 w-100 tl mb2">Only show events with</label>
      {buttons.map(button => (
        <FilterButton key={button.id} toggleFilter={toggleFilter} {...button}>
          {button.name}
        </FilterButton>
      ))}
    </div>
  );
};

export default Filters;
