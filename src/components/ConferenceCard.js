import React from 'react';

const ConferenceCard = props => {
  const {
    eventName,
    submissionDueDate,
    eventDate,
    location,
    isCompensated,
    hasCodeOfConduct,
    hasDiversityScholarship
  } = props.conferenceData;
  return (
    <div class="br3 ba b--black-20 mw5 mw7-ns center bg-white pa3 ph5-ns sans-serif ma3 tl">
      <div class="w-100 cf sans-serif">
        <h3 class="di tl bright-blue">{eventName}</h3>
        <p class="di fr pa2 black ma0">{submissionDueDate}</p>
      </div>
      <p class="di pa0 mid-gray">{eventDate}</p>
      <p class="di ph2 mid-gray">•</p>
      <p class="di pa0 mid-gray">{location}</p>
      <ul class=" mw10 pl0 pt3">
        <li class="dib pa2">
          <i class="fas fa-dollar-sign mid-gray pr2" />
          {isCompensated && 'yes'}Compensation
        </li>
        <li class="dib pa2">
          <i class="fas fa-book mid-gray pr2" />
          {hasCodeOfConduct && 'yes'}Code of Conduct
        </li>
        <li class="dib pa2">
          <i class="fas fa-graduation-cap mid-gray pr2" />
          {hasDiversityScholarship && 'yes'}Diversity Scholarship
        </li>
      </ul>
    </div>
  );
};

export default ConferenceCard;
