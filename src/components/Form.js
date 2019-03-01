import React from 'react';
import TextInput from './TextInput';
import RadioButton from './RadioButton';
import Autocomplete from './Autocomplete';

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
    {},
    {
      title: 'Event Location'
    },
    {},
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
  propsArray = propsArray.map(current => ({ ...current, handleChange }));
  propsArray[3] = { ...propsArray[3], handleAutocomplete };
  return (
    <form>
      <TextInput {...propsArray[0]} />
      <TextInput {...propsArray[1]} />

      <Autocomplete {...propsArray[3]} />

      <TextInput {...propsArray[5]} />
      <RadioButton {...propsArray[6]} />
      <RadioButton {...propsArray[7]} />
      <RadioButton {...propsArray[8]} />
    </form>
  );
};

export default Form;
