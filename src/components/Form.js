import React from 'react';
import TextInput from './TextInput';
import RadioButton from './RadioButton';
import Autocomplete from './Autocomplete';
import Datepicker from './Datepicker';
import Button from './Button';
import formConfig from './formConfig.json';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: '',
      eventWebsite: '',
      eventDate: '',
      eventLocation: '',
      submissionDueDate: '',
      submissionWebsite: '',
      isCompensated: '',
      hasCodeOfConduct: '',
      hasDiversityScholarships: '',
      contactName: '',
      contactEmail: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAutocomplete = this.handleAutocomplete.bind(this);
    this.handleDatepicker = this.handleDatepicker.bind(this);
    this.showState = this.showState.bind(this);
  }
  showState() {
    alert(this.state);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleAutocomplete(city) {
    this.setState({ eventLocation: city });
  }
  handleDatepicker(selectedDate, dateName) {
    this.setState({ [dateName]: selectedDate });
  }

  render() {
    // let propsArray = this.makePropsArray();
    // propsArray = propsArray.map(current => ({
    //   ...current,
    //   handleChange: this.handleChange
    // }));
    // propsArray[2] = {
    //   ...propsArray[2],
    //   handleDatepicker: this.handleDatepicker
    // };
    // propsArray[3] = {
    //   ...propsArray[3],
    //   handleAutocomplete: this.handleAutocomplete
    // };
    // propsArray[4] = {
    //   ...propsArray[4],
    //   handleDatepicker: this.handleDatepicker
    // };
    return (
      <div className="w-60 center">
        <div className=" w-100 sans-serif pa2 f3 tl">Submit an Event</div>
        <form className="ba br1 b--lavender pa2  bg-white">
          <div className="dib w-50 tl pa2">
            <TextInput
              {...formConfig.eventName}
              handleChange={this.handleChange}
            />
          </div>
          <div className="dib w-50 tl pa2">
            <TextInput
              {...formConfig.eventWebsite}
              handleChange={this.handleChange}
            />
          </div>
          <div className="dib w-50 tl pa2">
            <Datepicker
              {...formConfig.eventDate}
              handleDatepicker={this.handleDatepicker}
            />
          </div>
          <div className="dib w-50 tl pa2">
            <Autocomplete
              {...formConfig.eventLocation}
              handleAutocomplete={this.handleAutocomplete}
            />
          </div>
          <div className="dib w-50 tl pa2">
            <Datepicker
              {...formConfig.submissionDueDate}
              handleDatepicker={this.handleDatepicker}
            />
          </div>
          <div className="dib w-50 tl pa2">
            <TextInput
              {...formConfig.submissionWebsite}
              handleChange={this.handleChange}
            />
          </div>
          <RadioButton
            {...formConfig.isCompensated}
            handleChange={this.handleChange}
          />
          <RadioButton
            {...formConfig.hasCodeOfConduct}
            handleChange={this.handleChange}
          />
          <RadioButton
            {...formConfig.hasDiversityScholarships}
            handleChange={this.handleChange}
          />
          <hr />
          <div className="dib w-50 tl pa2">
            <TextInput
              {...formConfig.contactName}
              handleChange={this.handleChange}
            />
          </div>
          <div className="dib w-50 tl pa2">
            <TextInput
              {...formConfig.contactEmail}
              handleChange={this.handleChange}
            />
          </div>
          <hr />
          <div className="w-20 tl">
            <Button title="Submit Event" />
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
