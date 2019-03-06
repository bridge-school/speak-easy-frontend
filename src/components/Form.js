import React from 'react';
import TextInput from './TextInput';
import RadioButton from './RadioButton';
import Autocomplete from './Autocomplete';
import Datepicker from './Datepicker';
import Button from './Button';

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
  makePropsArray() {
    let propsArray = [
      {
        title: 'Event Name',
        name: 'eventName',
        inputType: 'text'
      },
      {
        title: 'Event Website',
        name: 'eventWebsite',
        inputType: 'text'
      },
      {
        title: 'Event Date',
        name: 'eventDate'
      },
      {
        title: 'Event Location',
        name: 'eventLocation'
      },
      {
        title: 'Submission Due Date',
        name: 'submissionDueDate'
      },
      {
        title: 'Submission Website',
        name: 'submissionWebsite'
      },
      {
        name: 'isCompensated',
        question: 'Are all speakers compensated at your event?',
        options: ['Yes', 'No']
      },
      {
        name: 'hasCodeOfConduct',
        question: 'Does your event have a publicly visible code of conduct?',
        options: ['Yes', 'No']
      },
      {
        name: 'hasDiversityScholarships',
        question: 'Does your event provide diversity scholarships?',
        options: ['Yes', 'No']
      },
      {
        name: 'contactName',
        title: 'Contact Name'
      },
      {
        name: 'contactEmail',
        title: 'Contact Email'
      }
    ];
    return propsArray;
  }
  render() {
    let propsArray = this.makePropsArray();
    propsArray = propsArray.map(current => ({
      ...current,
      handleChange: this.handleChange
    }));
    propsArray[2] = {
      ...propsArray[2],
      handleDatepicker: this.handleDatepicker
    };
    propsArray[3] = {
      ...propsArray[3],
      handleAutocomplete: this.handleAutocomplete
    };
    propsArray[4] = {
      ...propsArray[4],
      handleDatepicker: this.handleDatepicker
    };
    return (
      <div className="w-60 center">
        <div className=" w-100 sans-serif pa2 f3 tl">Submit an Event</div>
        <form className="ba br1 b--lavender pa2  bg-white">
          <div className="dib w-50 tl pa2">
            <TextInput {...propsArray[0]} />
          </div>
          <div className="dib w-50 tl pa2">
            <TextInput {...propsArray[1]} />
          </div>
          <div className="dib w-50 tl pa2">
            <Datepicker {...propsArray[2]} />
          </div>
          <div className="dib w-50 tl pa2">
            <Autocomplete {...propsArray[3]} />
          </div>
          <div className="dib w-50 tl pa2">
            <Datepicker {...propsArray[4]} />
          </div>
          <div className="dib w-50 tl pa2">
            <TextInput {...propsArray[5]} />
          </div>
          <RadioButton {...propsArray[6]} />
          <RadioButton {...propsArray[7]} />
          <RadioButton {...propsArray[8]} />
          <hr />
          <div className="dib w-50 tl pa2">
            <TextInput {...propsArray[9]} />
          </div>
          <div className="dib w-50 tl pa2">
            <TextInput {...propsArray[10]} />
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
