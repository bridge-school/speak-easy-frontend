import React from 'react';
import { formatDate } from '../utils';
import Compensation from '../assets/compensation.png';
import Scholarship from '../assets/scholarship.png';
import Conduct from '../assets/code-conduct.png';

const BlackOrGray = ({ isActive, children, icon, alt }) => {
  return isActive ? (
    <li className="dib pr5">
      <img className="di mw1 ph1" src={icon} alt={alt} />
      <span className="black">{children}</span>
    </li>
  ) : (
    <li className="dib pr5">
      <img className="mw1 ph1" src={icon} alt={alt} />
      <span className="gray strike">{children}</span>
    </li>
  );
};

const ConferenceCard = props => {
  const {
    eventName,
    eventWebsite,
    submissionDueDate,
    eventDate,
    location,
    isCompensated,
    hasCodeOfConduct,
    hasDiversityScholarship
  } = props.conferenceData;
  return (
    <div class="br3 ba b--black-20 mw5 mw7-ns center bg-white pa3  sans-serif ma3 tl">
      <div className="w-100 cf sans-serif pv2">
        <a href={eventWebsite}>
          <h3 className="di tl bright-blue">{eventName}</h3>
        </a>
        <p className="di fr black ma0">{submissionDueDate}</p>
      </div>
      <p className="di pa0 mid-gray">{formatDate(eventDate)}</p>
      <p className="di ph2 mid-gray">•</p>
      <p className="di pa0 mid-gray">{location}</p>
      <ul className=" mw10 pl0 pt3">
        <BlackOrGray
          isActive={isCompensated}
          icon={Compensation}
          alt="dollar sign">
          Compensation
        </BlackOrGray>
        <BlackOrGray
          isActive={hasCodeOfConduct}
          icon={Conduct}
          alt="check mark">
          Code of Conduct
        </BlackOrGray>
        <BlackOrGray
          isActive={hasDiversityScholarship}
          icon={Scholarship}
          alt="graduation cap">
          Diversity Scholarship
        </BlackOrGray>
      </ul>
    </div>
  );
};

export default ConferenceCard;
