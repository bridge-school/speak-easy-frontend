import { combineReducers } from 'redux';
import {
  UPDATE_FORM_DATA,
  FORM_SUBMIT_START,
  FORM_SUBMIT_SUCCESS,
  LIST_FETCH_START,
  LIST_FETCH_SUCCESS,
  UPDATE_CONFERENCES
} from './actions';

const formData = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA:
      return {};
    default:
      return state;
  }
};

const isFormSubmitting = (state = false, action) => {
  switch (action.type) {
    case FORM_SUBMIT_START:
      return true;
    case FORM_SUBMIT_SUCCESS:
      return false;
    default:
      return state;
  }
};

const isListLoading = (state = false, action) => {
  switch (action.type) {
    case LIST_FETCH_START:
      return true;
    case LIST_FETCH_SUCCESS:
      return false;
    default:
      return state;
  }
};

const conferences = (state = [], action) => {
  switch (action.type) {
    case UPDATE_CONFERENCES:
      return action.payload;
    default:
      return state;
  }
};

const reducers = combineReducers({
  formData,
  isFormSubmitting,
  isListLoading,
  conferences
});

export default reducers;
