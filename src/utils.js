export const isFormDataValid = formData => {
  let validateMessage = '';
  //check for empty form fields
  const emptyFormFields = Object.keys(formData)
    .map(value => formData[value])
    .filter(x => x === '').length;
  if (emptyFormFields !== 0)
    validateMessage +=
      '\nAll fields are required. Please make sure that all fields are filled.';

  //match regex for email
  const emailRe = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRe.test(formData.contactEmail))
    validateMessage +=
      '\nPlease provide a valid email address for Contact Email.';

  //match regex for url
  const urlRe = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
  if (!urlRe.test(formData.eventWebsite))
    validateMessage += '\nPlease enter a valid URL for Event Website.';

  //check submissionDueDate is not before today
  const enteredSubmissionDueDate = new Date(formData.submissionDueDate);
  const enteredEventDate = new Date(formData.eventDate);
  if (enteredSubmissionDueDate > enteredEventDate)
    validateMessage +=
      'Submission due date should not be after the event date.';
  return validateMessage;
};
