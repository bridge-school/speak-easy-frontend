import React, { Component } from 'react';
import Script from 'react-load-script';

class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };

    this.handleScriptLoad = this.handleScriptLoad.bind(this);
  }

  handleScriptLoad() {
    const options = { types: ['(cities)'] };

    /*global google*/
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      options
    );
    //event listener for selection of a place suggestion
    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
  }

  handlePlaceSelect = () => {
    // get city from address object
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;

    // if address is valid set state
    if (address) {
      this.setState(
        {
          input: addressObject.formatted_address
        },
        () => {
          this.props.handleAutocomplete(this.state.input);
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Script
          type="text/javascript"
          url={`https://maps.googleapis.com/maps/api/js?key=${
            process.env.REACT_APP_PLACES_API_KEY
          }&libraries=places`}
          onLoad={this.handleScriptLoad}
        />
        <div className="b pb2">
          <label htmlFor="autocomplete">{this.props.title}</label>
        </div>
        <input
          id="autocomplete"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          className="ba br1 b--grey pa2"
          required
        />
      </div>
    );
  }
}

export default Autocomplete;
