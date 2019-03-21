import { combineReducers } from 'redux';
import {
  UPDATE_FORM_DATA,
  FORM_SUBMIT_START,
  FORM_SUBMIT_ERROR,
  FORM_SUBMIT_SUCCESS,
  LIST_FETCH_START,
  LIST_FETCH_SUCCESS,
  UPDATE_CONFERENCES,
  UPDATE_CONFERENCES_TO_DISPLAY,
  UPDATE_SEARCH_PARAM,
  FORM_RESET,
  TOGGLE_FILTER,
  UPDATE_SORT_BY
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

const conferencesToDisplay = (state = [], action) => {
  switch (action.type) {
    case UPDATE_CONFERENCES_TO_DISPLAY:
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

const filters = (
  state = {
    compensation: false,
    codeOfConduct: false,
    diversityScholarship: false
  },
  action
) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return { ...state, [action.key]: !state[action.key] };
    default:
      return state;
  }
};

const sortBy = (state = 'default', action) => {
  switch (action.type) {
    case UPDATE_SORT_BY:
      return action.payload;
    default:
      return state;
  }
};

const reducers = combineReducers({
  conferences,
  conferencesToDisplay,
  filters,
  formData,
  formErrorMessage,
  formSubmitted,
  isFormSubmitting,
  isListLoading,
  searchParam,
  sortBy
});

export default reducers;
