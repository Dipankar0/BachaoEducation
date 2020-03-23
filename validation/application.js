const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateApplicationInput(data) {
  let errors = {};

  data.status = !isEmpty(data.status) ? data.status : '';
  data.skills = !isEmpty(data.skills) ? data.skills : '';
  data.phoneNo = !isEmpty(data.phoneNo) ? data.phoneNo : '';
  data.file = !isEmpty(data.file) ? data.file : '';

  if (Validator.isEmpty(data.status)) {
    errors.status = 'Company name field is required';
  }
  if (Validator.isEmpty(data.skills)) {
    errors.skills = 'Company description field is required';
  }
  if (Validator.isEmpty(data.phoneNo)) {
    errors.phoneNo = 'This field is required';
  }
  if (Validator.isEmpty(data.file)) {
    errors.file = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
