import { combineReducers } from 'redux';
import {
  UPDATE_FORM_DATA,
  FORM_SUBMIT_START,
  FORM_SUBMIT_ERROR,
  FORM_SUBMIT_SUCCESS,
  LIST_FETCH_START,
  LIST_FETCH_SUCCESS,
  UPDATE_CONFERENCES,
  UPDATE_SEARCH_PARAM,
  FORM_RESET
} from './actions';

const formData = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA:
      return { ...state, ...action.payload };
    case FORM_RESET:
      return {};
    default:
      return state;
  }
};

const isFormSubmitting = (state = false, action) => {
  switch (action.type) {
    case FORM_SUBMIT_START:
      return true;
    case FORM_SUBMIT_ERROR:
      return false;
    case FORM_SUBMIT_SUCCESS:
      return false;
    case FORM_RESET:
      return false;
    default:
      return state;
  }
};

const formSubmitted = (state = false, action) => {
  switch (action.type) {
    case FORM_SUBMIT_START:
      return false;
    case FORM_SUBMIT_ERROR:
      return false;
    case FORM_SUBMIT_SUCCESS:
      return true;
    case FORM_RESET:
      return false;
    default:
      return state;
  }
};

const formErrorMessage = (state = '', action) => {
  switch (action.type) {
    case FORM_SUBMIT_ERROR:
      return action.payload;
    case FORM_RESET:
      return '';
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

const searchParam = (state = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCH_PARAM:
      return action.payload;
    default:
      return state;
  }
};

const reducers = combineReducers({
  formData,
  isFormSubmitting,
  formSubmitted,
  formErrorMessage,
  isListLoading,
  conferences,
  searchParam
});

export default reducers;
