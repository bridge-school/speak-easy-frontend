import { connect } from 'react-redux';
import React from 'react';
import ConferenceCard from './ConferenceCard';
import SearchBar from './SearchBar';
import DropDown from './DropDown';
import { fetchConferenceData } from '../redux/actions';

export class ConferenceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 'default'
    };
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  searchMatches = field =>
    field.toLowerCase().search(this.props.searchParam.toLowerCase()) !== -1;

  handleDropDown = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const filteredList = this.props.conferences.filter(
      item =>
        this.searchMatches(item.eventName) ||
        this.searchMatches(item.eventLocation)
    );

    const conferenceList = (
      <section className=" mw5 mw7-ns center">
        <h2 className=" w-100 sans-serif pa0 f2 tl fw2 mh0 mt4 mb3">
          Upcoming Conferences
        </h2>
        {filteredList &&
          filteredList.map(conference => (
            <ConferenceCard key={conference.id} conferenceData={conference} />
          ))}
      </section>
    );

    const filteredByDate = this.props.conferences.filter(
      conference => new Date(conference.submissionDueDate) - new Date() < 7
    );

    const filteredConferenceList = (
      <section>
        <h2 className=" w-100 sans-serif pa0 f2 tl fw2 mh0 mt4 mb3">
          Events with Upcoming Submission Dates
        </h2>
        {filteredByDate.map(conference => (
          <ConferenceCard key={conference.id} conferenceData={conference} />
        ))}
      </section>
    );

    return (
      <section className=" mw5 mw7-ns center">
        <SearchBar />
        <DropDown
          value={this.state.selectedValue}
          onChange={this.handleDropDown}
        />
        {this.state.selectedValue === 'submissionDate'
          ? filteredConferenceList
          : conferenceList}
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
