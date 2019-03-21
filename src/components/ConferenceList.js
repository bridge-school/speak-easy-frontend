import { connect } from 'react-redux';
import React from 'react';
import ConferenceCard from './ConferenceCard';
import SearchBar from './SearchBar';
import DropDown from './DropDown';
import {
  fetchConferenceData,
  updateFilters,
  updateSort
} from '../redux/actions';
import Filters from './Filters';

export class ConferenceList extends React.Component {
  constructor(props) {
    super(props);
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  searchMatches = field =>
    field.toLowerCase().search(this.props.searchParam.toLowerCase()) !== -1;

  handleDropDown = event => {
    this.props.updateSort(event.target.value);
  };

  render() {
    const { conferences, updateFilters, filters, selectedValue } = this.props;

    const filteredList = conferences.filter(
      item =>
        this.searchMatches(item.eventName) ||
        this.searchMatches(item.eventLocation)
    );

    const conferenceList =
      filteredList &&
      filteredList.map(conference => (
        <ConferenceCard key={conference.id} conferenceData={conference} />
      ));

    return (
      <section className="ma5 mw7-ns w-90 center">
        <SearchBar />
        <div className="flex flex-wrap">
          <Filters toggleFilter={updateFilters} filters={filters} />
          <DropDown value={selectedValue} onChange={this.handleDropDown} />
        </div>

        <h2 className="w-100 sans-serif pa0 f2 tl fw2 mh0 mt4 mb3">
          Upcoming Conferences
        </h2>
        {conferenceList}
      </section>
    );
  }
}

const mapStateToProps = store => {
  return {
    conferences: store.conferencesToDisplay,
    searchParam: store.searchParam,
    filters: store.filters,
    selectedValue: store.sortBy
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchConferenceData()),
    updateFilters: filterKey => dispatch(updateFilters(filterKey)),
    updateSort: sortByKey => dispatch(updateSort(sortByKey))
  };
};

const ConnectedConferenceList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConferenceList);

export default ConnectedConferenceList;
