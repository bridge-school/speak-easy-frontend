import React from 'react';
import 'tachyons';

import { storiesOf } from '@storybook/react';

import TextInput from '../components/TextInput';
import Autocomplete from '../components/Autocomplete';
import Datepicker from '../components/Datepicker';
import RadioButton from '../components/RadioButton';
import Form from '../components/Form';

storiesOf('TextInput', module)
  .add('default', () => <TextInput />)
  .add('with label', () => <TextInput title="Name" />);

storiesOf('Autocomplete', module).add('default', () => <Autocomplete />);

storiesOf('Datepicker', module).add('default', () => <Datepicker />);
storiesOf('RadioButton', module).add('default', () => <RadioButton />);

storiesOf('Form', module).add('default', () => <Form />);
