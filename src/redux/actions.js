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
