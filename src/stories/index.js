import React from 'react';

import { storiesOf } from '@storybook/react';

import TextInput from '../components/TextInput';
import Autocomplete from '../components/Autocomplete';

storiesOf('TextInput', module)
  .add('default', () => <TextInput />)
  .add('with label', () => <TextInput title="Name" />);

storiesOf('Autocomplete', module).add('default', () => <Autocomplete />);
