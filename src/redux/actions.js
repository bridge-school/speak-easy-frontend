import { isFormDataValid } from '../utils';

export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';
export const FORM_SUBMIT_START = 'FORM_SUBMIT_START';
export const FORM_SUBMIT_ERROR = 'FORM_SUBMIT_ERROR';
export const FORM_SUBMIT_SUCCESS = 'FORM_SUBMIT_SUCCESS';
export const FORM_RESET = 'FORM_RESET';
export const LIST_FETCH_START = 'LIST_FETCH_START';
export const LIST_FETCH_SUCCESS = 'LIST_FETCH_SUCCESS';
export const UPDATE_CONFERENCES = 'UPDATE_CONFERENCES';

export const UPDATE_SEARCH_PARAM = 'UPDATE_SEARCH_PARAM';

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

export const fetchConferenceData = (dispatch, url) => {
  return dispatch => {
    dispatch(listFetchStart());
    fetch('http://localhost:8081/conferences')
      .then(response => response.json())
      .then(res => dispatch(updateConferences(res.data)));
  };
};
