import { isFormDataValid } from '../utils';

export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';
export const FORM_SUBMIT_START = 'FORM_SUBMIT_START';
export const FORM_SUBMIT_ERROR = 'FORM_SUBMIT_ERROR';
export const FORM_SUBMIT_SUCCESS = 'FORM_SUBMIT_SUCCESS';
export const FORM_RESET = 'FORM_RESET';
export const LIST_FETCH_START = 'LIST_FETCH_START';
export const LIST_FETCH_SUCCESS = 'LIST_FETCH_SUCCESS';
export const UPDATE_CONFERENCES = 'UPDATE_CONFERENCES';
export const UPDATE_CONFERENCES_TO_DISPLAY = 'UPDATE_CONFERENCES_TO_DISPLAY';
export const UPDATE_SEARCH_PARAM = 'UPDATE_SEARCH_PARAM';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';

export const onSearchChange = input => ({
  type: UPDATE_SEARCH_PARAM,
  payload: input
});

export const submitFormToStore = payload => {
  return { type: UPDATE_FORM_DATA, payload };
};

export const formSubmitStart = () => ({
  type: FORM_SUBMIT_START
});

export const formSubmitError = payload => ({
  type: FORM_SUBMIT_ERROR,
  payload
});

export const formSubmitSuccess = () => ({
  type: FORM_SUBMIT_SUCCESS
});

export const formReset = () => ({
  type: FORM_RESET
});

const toggleFilter = key => ({
  type: TOGGLE_FILTER,
  key
});

export const handleFormSubmit = formData => {
  return dispatch => {
    dispatch(submitFormToStore(formData));

    const validateMessage = isFormDataValid(formData);

    if (validateMessage.length === 0) {
      dispatch(formSubmitStart());
      fetch('http://localhost:8081/conferences', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(() => {
          dispatch(formSubmitSuccess());
          dispatch(formReset());
        })
        .catch(() =>
          dispatch(formSubmitError('Something went wrong. Please try again.'))
        );
    } else {
      dispatch(formSubmitError(validateMessage));
    }
  };
};

export const listFetchStart = () => {
  return {
    type: LIST_FETCH_START
  };
};

export const listFetchSuccess = conferences => {
  return {
    type: LIST_FETCH_SUCCESS,
    conferences
  };
};

export const updateConferences = payload => {
  return {
    type: UPDATE_CONFERENCES,
    payload
  };
};

export const updateConferencesToDisplay = payload => {
  return {
    type: UPDATE_CONFERENCES_TO_DISPLAY,
    payload
  };
};

export const fetchConferenceData = () => {
  return dispatch => {
    dispatch(listFetchStart());
    fetch('http://localhost:8081/conferences')
      .then(response => response.json())
      .then(res => {
        dispatch(updateConferences(res.data));
        dispatch(updateConferencesToDisplay(res.data));
      });
  };
};

const isTrue = value => value === 'Yes';

export const updateFilters = filterKey => {
  return (dispatch, getState) => {
    dispatch(toggleFilter(filterKey));

    const { conferences, filters } = getState();
    const {
      compensation: hasCompensation,
      codeOfConduct: hasCodeOfConduct,
      diversityScholarship: hasDiversityScholarship
    } = filters;

    const filteredConferences = conferences.filter(
      conference =>
        (hasCompensation ? isTrue(conference.isCompensated) : true) &&
        (hasCodeOfConduct ? isTrue(conference.hasCodeOfConduct) : true) &&
        (hasDiversityScholarship
          ? isTrue(conference.hasDiversityScholarships)
          : true)
    );

    dispatch(updateConferencesToDisplay(filteredConferences));
  };
};
