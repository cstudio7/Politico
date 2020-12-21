import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const validateInput = data => {
  let errors = {};
  const {
    firstname,
    lastname,
    email,
    password,
    confirm_password,
    phonenumber,
    passporturl
  } = data;

  if (Validator.isEmpty(firstname)) {
    errors.firstname = 'First Name is required';
  }
  if (Validator.isEmpty(lastname)) {
    errors.lastname = 'Last Name is required';
  }
  if (Validator.isEmpty(email)) {
    errors.email = 'Email is required';
  }
  if (!Validator.isEmail(email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isEmpty(password)) {
    errors.password = 'Password is required';
  }
  if (Validator.isEmpty(confirm_password)) {
    errors.confirm_password = 'Confirm password is required';
  }
  if (!Validator.equals(password, confirm_password)) {
    errors.confirm_password = 'Passwords  and Confirm Password must match';
  }
  if (Validator.isEmpty(phonenumber)) {
    errors.phonenumber = 'Phone number is required and country code';
  }
  if (Validator.isEmpty(passporturl)) {
    errors.passporturl = 'Kindly upload passport image';
  }
  if (!Validator.isURL(passporturl)) {
    errors.passporturl = 'Kindly upload passport';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateInput;
