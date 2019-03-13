import moment from 'moment';

export const formatDate = date =>
  moment(date).isValid() ? moment(date).format('MMM Do, YYYY') : '';
