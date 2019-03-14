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
  const emailRe = /^[\w.-]+@[\w.-]+.[a-zA-Z]+$/;
  if (!emailRe.test(formData.contactEmail))
    validateMessage +=
      '\nPlease provide a valid email address for Contact Email.';

  //match regex for url of Event Website
  const urlRe = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (!urlRe.test(formData.eventWebsite))
    validateMessage += '\nPlease enter a valid URL for Event Website.';

  //match regex for url for submission website
  if (!urlRe.test(formData.submissionWebsite))
    validateMessage += '\nPlease enter a valid URL for Submission Website.';

  //check submissionDueDate is not before today
  const enteredSubmissionDueDate = new Date(formData.submissionDueDate);
  const enteredEventDate = new Date(formData.eventDate);
  if (enteredSubmissionDueDate > enteredEventDate)
    validateMessage +=
      'Submission due date should not be after the event date.';
  return validateMessage;
};
