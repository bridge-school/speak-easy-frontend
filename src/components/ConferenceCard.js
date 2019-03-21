import React, { Component } from 'react';
import { formatDate } from '../utils';
import Compensation from '../assets/compensation.png';
import Scholarship from '../assets/scholarship.png';
import Conduct from '../assets/code-conduct.png';

const BlackOrGray = ({ isActive, children, icon, alt }) => {
  return isActive === 'Yes' ? (
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

class ConferenceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }
  render() {
    const {
      eventName,
      eventWebsite,
      submissionDueDate,
      eventDate,
      eventLocation,
      isCompensated,
      hasCodeOfConduct,
      hasDiversityScholarships,
      contactEmail,
      contactName,
      submissionWebsite
    } = this.props.conferenceData;
    return (
      <div className="br3 ba b--black-20 mw5 mw7-ns center bg-white pa3 sans-serif ma3 tl">
        <div className="w-100 cf sans-serif pv2">
          <a href={eventWebsite}>
            <h3 className="di tl bright-blue">{eventName}</h3>
          </a>
          <p className="di fr black ma0">{formatDate(submissionDueDate)}</p>
        </div>
        <p className="di pa0 mid-gray">{formatDate(eventDate)}</p>
        <p className="di ph2 mid-gray">•</p>
        <p className="di pa0 mid-gray">{eventLocation}</p>
        <ul className=" mw10 pl0 pt3">
          <BlackOrGray
            isActive={isCompensated}
            icon={Compensation}
            alt="dollar sign"
          >
            Compensation
          </BlackOrGray>
          <BlackOrGray
            isActive={hasCodeOfConduct}
            icon={Conduct}
            alt="check mark"
          >
            Code of Conduct
          </BlackOrGray>
          <BlackOrGray
            isActive={hasDiversityScholarships}
            icon={Scholarship}
            alt="graduation cap"
          >
            Diversity Scholarship
          </BlackOrGray>
        </ul>
        {this.state.isExpanded && (
          <div className="mv2">
            <p className="mv1">Contact Email: {contactEmail}</p>
            <p className="mv1">Contact Name: {contactName}</p>
            <p className="mv1">
              Submission Website:
              <a
                className="link underline-hover bright-blue ph1"
                href={`http://${submissionWebsite}`}
              >
                {submissionWebsite}
              </a>
            </p>
          </div>
        )}
        <a
          className="f6 link dim ph3 pv2 mb2 dib bright-blue mv2"
          href="#0"
          onClick={() => this.setState({ isExpanded: !this.state.isExpanded })}
        >
          {this.state.isExpanded ? 'See less' : 'See more...'}
        </a>
      </div>
    );
  }
}

export default ConferenceCard;
