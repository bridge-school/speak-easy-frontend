import React from 'react';
import Recaptcha from 'react-recaptcha';
import Loader from 'react-loader-spinner';
import TextInput from './TextInput';
import RadioButton from './RadioButton';
import Autocomplete from './Autocomplete';
import Datepicker from './Datepicker';
import formConfig from './formConfig.json';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleFormSubmit } from '../redux/actions';

const LoadingState = () => (
  <div className="pa7">
    <Loader color="grey" width={200} heigth={80} type="RevolvingDot" />
  </div>
);

const FieldWrapper = ({ children }) => (
  <div className="dib w-50-ns tl pv2">{children}</div>
);

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
      contactEmail: '',
      isVerified: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAutocomplete = this.handleAutocomplete.bind(this);
    this.handleDatepicker = this.handleDatepicker.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  recaptchaLoaded() {
    console.log('reCaptcha successfully loaded');
  }

  handleSubmitButton(e) {
    e.preventDefault();
    if (this.state.isVerified) {
      this.props.handleSubmit(this.state);
    } else {
      alert('Please verify that you are a human!');
    }
  }
  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true
      });
    }
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
    const { isLoading, isSubmitted, errorMessage } = this.props;

    return (
      <div className="w-60-l center">
        {isSubmitted && <Redirect to="/success" />}
        <h2 className=" w-100 sans-serif pa0 f2 tl fw2 mh0 mt4 mb3">
          Submit an Event
        </h2>
        <div className="ba br3 b--lavender pa4 bg-white">
          {isLoading ? (
            <LoadingState />
          ) : (
            <form>
              {errorMessage && (
                <div className="ba br1 b--light-red pa3 ma3 bg-washed-red dark-red">
                  {errorMessage}
                </div>
              )}
              <FieldWrapper>
                <TextInput
                  {...formConfig.eventName}
                  handleChange={this.handleChange}
                />
              </FieldWrapper>
              <FieldWrapper>
                <TextInput
                  {...formConfig.eventWebsite}
                  handleChange={this.handleChange}
                />
              </FieldWrapper>
              <FieldWrapper>
                <Datepicker
                  {...formConfig.eventDate}
                  handleDatepicker={this.handleDatepicker}
                />
              </FieldWrapper>
              <FieldWrapper>
                <Autocomplete
                  {...formConfig.eventLocation}
                  handleAutocomplete={this.handleAutocomplete}
                />
              </FieldWrapper>
              <FieldWrapper>
                <Datepicker
                  {...formConfig.submissionDueDate}
                  handleDatepicker={this.handleDatepicker}
                />
              </FieldWrapper>
              <FieldWrapper>
                <TextInput
                  {...formConfig.submissionWebsite}
                  handleChange={this.handleChange}
                />
              </FieldWrapper>
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
              <FieldWrapper>
                <TextInput
                  {...formConfig.contactName}
                  handleChange={this.handleChange}
                />
              </FieldWrapper>
              <FieldWrapper>
                <TextInput
                  {...formConfig.contactEmail}
                  handleChange={this.handleChange}
                />
              </FieldWrapper>
              <hr />
              <div className="pa2">
                <Recaptcha
                  sitekey={process.env.REACT_APP_RECAPTCHA_SITEKEY}
                  render="explicit"
                  onloadCallback={this.recaptchaLoaded}
                  verifyCallback={this.verifyCallback}
                />
              </div>
              <div className="w-20 tl">
                <button
                  title="Submit Event"
                  onClick={this.handleSubmitButton}
                  className="ba br2 b--grey pa2 bg-bright-blue white f6 sans-serif">
                  Submit Event
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  handleSubmit: state => dispatch(handleFormSubmit(state))
});

const mapStateToProps = state => ({
  isLoading: state.isFormSubmitting,
  isSubmitted: state.formSubmitted,
  errorMessage: state.formErrorMessage
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
