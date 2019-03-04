import React from 'react';
import TextInput from './TextInput';
import RadioButton from './RadioButton';
import Autocomplete from './Autocomplete';
import Datepicker from './Datepicker';

const Form = props => {
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
      title: 'Event Location'
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
    }
  ];
  const handleChange = e => {
    console.log(e.target.name, e.target.value);
  };

  const handleAutocomplete = city => {
    console.log(city);
  };
  const handleDatepicker = selectedDate => {
    console.log(selectedDate);
  };
  propsArray = propsArray.map(current => ({ ...current, handleChange }));
  propsArray[2] = { ...propsArray[2], handleDatepicker };
  propsArray[3] = { ...propsArray[3], handleAutocomplete };
  propsArray[4] = { ...propsArray[4], handleDatepicker };
  return (
    <form>
      <TextInput {...propsArray[0]} />
      <TextInput {...propsArray[1]} />
      <Datepicker {...propsArray[2]} />
      <Autocomplete {...propsArray[3]} />
      <Datepicker {...propsArray[4]} />
      <TextInput {...propsArray[5]} />
      <RadioButton {...propsArray[6]} />
      <RadioButton {...propsArray[7]} />
      <RadioButton {...propsArray[8]} />
    </form>
  );
};

export default Form;
