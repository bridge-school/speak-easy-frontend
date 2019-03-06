import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import TextInput from './TextInput';

class Datepicker extends Component {
  state = {
    selectedDate: null
  };

  handleDayChange = date => {
    const { handleDatepicker } = this.props;
    this.setState({ selectedDate: date }, () => {
      if (handleDatepicker) {
        handleDatepicker(this.state.selectedDate);
      }
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
          component={props => <TextInput {...props} />}
        />
      </div>
    );
  }
}

export default Datepicker;
