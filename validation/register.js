const Validator = require("validator");
const isEmpty = require("./is-empty.js");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.passwordConfirm = !isEmpty(data.passwordConfirm)
    ? data.passwordConfirm
    : "";

  if (!Validator.isLength(data.name, { min: 3, max: 30 })) {
    errors.name = "Name must be between 3 and 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is Required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is Required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is Invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is Required";
  }

  if (!Validator.isLength(data.password, { min: 9, max: 30 })) {
    errors.password = "Password must be between 9 and 30 characters";
  }

  if (Validator.isEmpty(data.passwordConfirm)) {
    errors.passwordConfirm = "Confirm Password is Required";
  }

  if (!Validator.equals(data.password, data.passwordConfirm)) {
    errors.passwordConfirm = "Password must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
