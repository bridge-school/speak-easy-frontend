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
    const isDefault = this.state.selectedValue === 'default';
    const filteredList = this.props.conferences.filter(
      item =>
        this.searchMatches(item.eventName) ||
        this.searchMatches(item.eventLocation)
    );

    const conferenceList =
      filteredList &&
      filteredList.map(conference => (
        <ConferenceCard key={conference.id} conferenceData={conference} />
      ));

    const filteredByDate = this.props.conferences
      .filter(
        conference => new Date(conference.submissionDueDate) - new Date() < 7
      )
      .map(conference => (
        <ConferenceCard key={conference.id} conferenceData={conference} />
      ));

    return (
      <section className=" mw5 mw7-ns center">
        <SearchBar />
        <DropDown
          value={this.state.selectedValue}
          onChange={this.handleDropDown}
        />
        <h2 className="w-100 sans-serif pa0 f2 tl fw2 mh0 mt4 mb3">
          {isDefault
            ? 'Upcoming Conferences'
            : 'Events with Upcoming Submissions'}
        </h2>
        {isDefault ? conferenceList : filteredByDate}
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
