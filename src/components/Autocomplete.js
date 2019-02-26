import React, { Component } from 'react';
import Script from 'react-load-script';

class Autocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }

        this.handleScriptLoad = this.handleScriptLoad.bind(this);
    }

    handleScriptLoad() { 

        const options = { types: ['(cities)'] };

        /*global google*/
        this.autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('autocomplete'),
            options);
       //event listener for selection of a place suggestion
        this.autocomplete.addListener('place_changed',
            this.handlePlaceSelect); 
    }

    handlePlaceSelect =()=> {

        // get city from address object
        let addressObject = this.autocomplete.getPlace();
        let address = addressObject.address_components;

        // if address is valid set state
        if (address) {
            this.setState(
                {
                    input: addressObject.formatted_address
                }
            );
        }
    }

    handleChange = (e) => {
        this.setState({input: e.target.value})
    }
    
    render () {
        return (
        <div>
                <Script type="text/javascript" url={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_PLACES_API_KEY}&libraries=places`} onLoad={this.handleScriptLoad}/>
            <input id="autocomplete" type="text" value={this.state.input} onChange={this.handleChange}/>
        </div>)
    }
}

export default Autocomplete;