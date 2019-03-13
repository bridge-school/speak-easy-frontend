import { connect } from 'react-redux';
import React from 'react';
import ConferenceCard from './ConferenceCard';
import SearchBar from './SearchBar';

const ConferenceList = ({ conferences, searchParam }) => {
  console.log(searchParam);
  const filteredList = conferences.filter(
    item =>
      item.eventName.toLowerCase().search(searchParam.toLowerCase()) !== -1
  );

  return (
    <section className=" mw5 mw7-ns center">
      <h1 className="tl">Upcoming Conferences</h1>
      <SearchBar />
      {filteredList &&
        filteredList.map(conference => (
          <ConferenceCard key={conference.id} conferenceData={conference} />
        ))}
    </section>
  );
};

const mapStateToProps = store => {
  return {
    conferences: store.mockConferenceData,
    searchParam: store.searchParam
  };
};

const ConnectedConferenceList = connect(mapStateToProps)(ConferenceList);

export default ConnectedConferenceList;
