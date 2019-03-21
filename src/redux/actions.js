import { isFormDataValid } from '../utils';

const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'http://speak-easy-backend.bridgeschoolapp.io'
    : 'http://localhost:8081';

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
export const UPDATE_SORT_BY = 'UPDATE_SORT_BY';

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
      fetch(`${API_URL}/conferences`, {
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

export const updateSortBy = payload => {
  return {
    type: UPDATE_SORT_BY,
    payload
  };
};

export const fetchConferenceData = () => {
  return dispatch => {
    dispatch(listFetchStart());
    fetch(`${API_URL}/conferences`)
      .then(response => response.json())
      .then(res => {
        dispatch(updateConferences(res.data));
        dispatch(updateConferencesToDisplay(res.data));
      });
  };
};

const isTrue = value => value === 'Yes';

export const filterAndSortConferences = () => {
  return (dispatch, getState) => {
    const { conferences, filters, sortBy } = getState();

    // Filter conferences
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

    // Sort conferences
    if (sortBy === 'default') {
      dispatch(updateConferencesToDisplay(filteredConferences));
    } else {
      let sortedConferences = [...filteredConferences];

      if (sortBy === 'submissionDueDate' || sortBy === 'eventDate') {
        sortedConferences = sortedConferences.sort(ascendingDates(sortBy));
      } else {
        sortedConferences = sortedConferences.sort(ascendingNames);
      }

      dispatch(updateConferencesToDisplay(sortedConferences));
    }
  };
};

export const updateFilters = filterKey => {
  return dispatch => {
    dispatch(toggleFilter(filterKey));
    dispatch(filterAndSortConferences());
  };
};

const ascendingDates = dateKey => (a, b) => {
  const date1 = new Date(a[dateKey]);
  const date2 = new Date(b[dateKey]);

  return date1 - date2;
};

const ascendingNames = (a, b) => {
  const name1 = a.eventName.toLowerCase();
  const name2 = b.eventName.toLowerCase();

  return name1 < name2 ? -1 : name1 > name2 ? 1 : 0;
};

export const updateSort = sortByKey => {
  return dispatch => {
    dispatch(updateSortBy(sortByKey));
    dispatch(filterAndSortConferences());
  };
};
