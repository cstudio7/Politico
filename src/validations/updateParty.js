import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};
  const { partyName, partyDetail} = data;

  if (Validator.isEmpty(partyName)) {
    errors.partyName = 'party Name is required';
  }

  if (Validator.isEmpty(partyDetail)) {
    errors.partyDetail = 'party full name  is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
