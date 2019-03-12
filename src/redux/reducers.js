import { combineReducers } from 'redux';
import {
  UPDATE_FORM_DATA,
  FORM_SUBMIT_START,
  FORM_SUBMIT_SUCCESS,
  LIST_FETCH_START,
  LIST_FETCH_SUCCESS,
  UPDATE_CONFERENCES
} from './actions';

const mockConferences = [
  {
    id: '2uHNVX5NmaizoPB8pzbd',
    eventWebsite: 'anim.com',
    eventDate: '2019-02-03',
    eventName: 'laborum proident labore',
    location: 'Gibbsville, New Mexico',
    isCompensated: false,
    contactName: 'Juliette Freeman',
    submissionWebsite: 'http://www.mysubmission.com',
    hasCodeOfConduct: true,
    submissionDueDate: '2019-01-01',
    contactEmail: 'juliettefreeman@genesynk.com',
    hasDiversityScholarship: true
  },
  {
    id: '9iHfSKdQHb0sOq99a22Z',
    submissionWebsite: 'mysubmission.com',
    hasCodeOfConduct: true,
    submissionDueDate: '2019-02-03',
    contactEmail: 'knappwhitehead@genesynk.com',
    hasDiversityScholarship: false,
    eventWebsite: 'http://www.elit.com',
    eventDate: '2019-04-01',
    eventName: 'ea deserunt enim',
    location: 'Rosedale, Virgin Islands',
    isCompensated: true,
    contactName: 'Knapp Whitehead'
  },
  {
    id: 'bQB7sWiwBel9x0KG6VM4',
    location: 'Gracey, Idaho',
    isCompensated: true,
    contactName: 'Celeste Bradley',
    submissionWebsite: 'http://coolevent.com',
    hasCodeOfConduct: true,
    submissionDueDate: '2019-05-08',
    contactEmail: 'celestebradley@genesynk.com',
    hasDiversityScholarship: true,
    eventWebsite: 'http://www.commodo.com',
    eventDate: '2019-03-02',
    eventName: 'commodo ea exercitation'
  },
  {
    id: 'm46PjIUOaNBJE5OMGXwR',
    location: 'Siglerville, Iowa',
    isCompensated: true,
    contactName: 'Marcella Ayala',
    submissionWebsite: 'http://eventstuff.com',
    hasCodeOfConduct: false,
    submissionDueDate: '2019-03-03',
    contactEmail: 'www.marcellaayala@genesynk.com',
    hasDiversityScholarship: false,
    eventWebsite: 'http://aliqua.com',
    eventDate: '2019-08-08',
    eventName: 'amet do ullamco'
  },
  {
    id: 'qFJjgGZSHavZvLSmiHz9',
    contactEmail: 'foremancervantes@genesynk.com',
    hasDiversityScholarship: false,
    eventWebsite: 'http://www.deserunt.com',
    eventDate: '2019-06-06',
    eventName: 'proident nostrud consequat',
    location: 'Kraemer, Louisiana',
    isCompensated: false,
    contactName: 'Foreman Cervantes',
    submissionWebsite: 'http://yayayaa.com',
    hasCodeOfConduct: false,
    submissionDueDate: '2019-02-02'
  }
];

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

const mockConferenceData = (state = mockConferences, action) => {
  switch (action.type) {
    case 'UPDATE_MOCK_CONFERENCES':
      return [...state, action.payload];
    default:
      return state;
  }
};

const reducers = combineReducers({
  formData,
  isFormSubmitting,
  isListLoading,
  conferences,
  mockConferenceData
});

export default reducers;
