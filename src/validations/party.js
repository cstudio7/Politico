import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};
  const { partyName, partyDetail, hqAddress, logoUrl } = data;

  if (Validator.isEmpty(partyName)) {
    errors.partyName = 'party Name is required';
  }

  if (Validator.isEmpty(partyDetail)) {
    errors.partyDetail = 'party full name  is required';
  }

  if (Validator.isEmpty(hqAddress)) {
    errors.hqAddress = 'Party Head office address is required';
  }
  if (Validator.isEmpty(logoUrl)) {
    errors.logoUrl = 'Party logo is required';
  }
  if (!Validator.isURL(logoUrl)) {
    errors.logoUrl = 'Kindly upload party logo';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
