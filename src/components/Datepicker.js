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
        handleDatepicker(this.state.selectedDate, this.props.name);
      }
    });
  };

  render() {
    return (
      <div>
        <div className="b pb2">
          <label htmlFor={this.props.name}>{this.props.title}</label>
        </div>
        <DayPickerInput
          id={this.props.name}
          placeholder=""
          inputProps={{ readOnly: true }}
          onDayChange={this.handleDayChange}
          component={props => <TextInput {...props} required />}
          dayPickerProps={{
            disabledDays: {
              before: new Date()
            }
          }}
        />
      </div>
    );
  }
}

export default Datepicker;
