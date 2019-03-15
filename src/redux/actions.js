import { isFormDataValid } from '../utils';

export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';
export const FORM_SUBMIT_START = 'FORM_SUBMIT_START';
export const FORM_SUBMIT_SUCCESS = 'FORM_SUBMIT_SUCCESS';
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

export const handleFormSubmit = formData => {
  return dispatch => {
    dispatch(submitFormToStore(formData));

    const validateMessage = isFormDataValid(formData);

    if (validateMessage.length === 0) {
      fetch('http://localhost:8081/conferences', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    } else
      alert('Form validation returned following errors:\n' + validateMessage);
  };
};
