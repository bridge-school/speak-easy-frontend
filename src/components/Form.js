import React from 'react';
import TextInput from './TextInput';
import RadioButton from './RadioButton';
import Autocomplete from './Autocomplete';
import Datepicker from './Datepicker';
import formConfig from './formConfig.json';
import { connect } from 'react-redux';
import { handleFormSubmit } from '../redux/actions';

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
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }
  handleSubmitButton(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state);
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
            <button
              title="Submit Event"
              onClick={this.handleSubmitButton}
              className="ba br2 b--grey pa2 bg-bright-blue white f6 sans-serif"
            >
              Submit Event
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  handleSubmit: state => dispatch(handleFormSubmit(state))
});
export default connect(
  undefined,
  mapDispatchToProps
)(Form);
