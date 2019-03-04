import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class Datepicker extends Component {
  state = {
    selectedDate: null
  };

  handleDayChange = date => {
    this.setState({ selectedDate: date }, () => {
      this.props.handleDatepicker(this.state.selectedDate);
    });
  };

  render() {
    return (
      <div>
        <label htmlFor={this.props.name}>{this.props.title}</label>
        <DayPickerInput
          id={this.props.name}
          placeholder=""
          inputProps={{ readOnly: true }}
          onDayChange={this.handleDayChange}
        />
      </div>
    );
  }
}

export default Datepicker;
