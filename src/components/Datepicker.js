import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class Datepicker extends Component {
  state = {
    selectedDate: null
  };

  handleDayChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    return (
      <div>
        <DayPickerInput
          placeholder=""
          inputProps={{ readOnly: true }}
          onDayChange={this.handleDayChange}
        />
      </div>
    );
  }
}

export default Datepicker;
