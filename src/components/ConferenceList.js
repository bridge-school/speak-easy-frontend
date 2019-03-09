import { connect } from 'react-redux';
import React from 'react';
import ConferenceCard from './ConferenceCard';

const ConferenceList = ({ conferences }) => {
  return (
    <section class=" mw5 mw7-ns center">
      <h1 class="tl">Upcoming Conferences</h1>
      {conferences &&
        conferences.map(conference => (
          <ConferenceCard conferenceData={conference} />
        ))}
    </section>
  );
};

const mapStateToProps = store => {
  return {
    conferences: store.mockConferenceData
  };
};

const ConnectedConferenceList = connect(mapStateToProps)(ConferenceList);

export default ConnectedConferenceList;
