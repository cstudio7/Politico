import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};
  const { officeName, officeType } = data;

  if (Validator.isEmpty(officeName)) {
    errors.officeName = 'officeName is required';
  }

  if (Validator.isEmpty(officeType)) {
    errors.officeType = 'office type  is required';
  }


  return {
    errors,
    isValid: isEmpty(errors)
  };
}
