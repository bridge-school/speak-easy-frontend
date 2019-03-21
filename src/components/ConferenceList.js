import { connect } from 'react-redux';
import React from 'react';
import ConferenceCard from './ConferenceCard';
import SearchBar from './SearchBar';
import { fetchConferenceData } from '../redux/actions';

export class ConferenceList extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  searchMatches = field =>
    field.toLowerCase().search(this.props.searchParam.toLowerCase()) !== -1;

  render() {
    const filteredList = this.props.conferences.filter(
      item =>
        this.searchMatches(item.eventName) ||
        this.searchMatches(item.eventLocation)
    );

    return (
      <section className=" mw5 mw7-ns center">
        <h2 className=" w-100 sans-serif pa0 f2 tl fw2 mh0 mt4 mb3">
          Upcoming Conferences
        </h2>
        <SearchBar />
        {filteredList &&
          filteredList.map(conference => (
            <ConferenceCard key={conference.id} conferenceData={conference} />
          ))}
      </section>
    );
  }
}

const mapStateToProps = store => {
  return {
    conferences: store.conferences,
    searchParam: store.searchParam
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchConferenceData())
  };
};

const ConnectedConferenceList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConferenceList);

export default ConnectedConferenceList;
