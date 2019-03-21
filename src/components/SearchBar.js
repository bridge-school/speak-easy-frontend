import React from 'react';
import { connect } from 'react-redux';
import { onSearchChange } from '../redux/actions';
import SearchIcon from '../assets/search-icon.png';

const SearchBar = ({ searchParam, onSearchChange }) => {
  const handleChange = e => {
    onSearchChange(e.target.value);
  };
  return (
    <input
      style={{
        backgroundImage: `url(${SearchIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '20px',
        backgroundPositionY: '15px',
        backgroundPositionX: '10px'
      }}
      className="ba b--black-20 border-box w-100 center bg-white pa3 pl5 sans-serif ma3 tl "
      value={searchParam}
      onChange={handleChange}
      placeholder="Search for event by name or location"
    />
  );
};

//onChange update store
const mapStateToProps = store => {
  return {
    searchParam: store.searchParam
  };
};

const mapDispatchToProps = dispatch => ({
  onSearchChange: input => dispatch(onSearchChange(input))
});

const ConnectedSearchBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

export default ConnectedSearchBar;
