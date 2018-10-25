const Validator = require("validator");
const isEmpty = require("./is-empty.js");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is Invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is Required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is Required";
  }

  if (Validator.isLength(data.password, { min: 9, max: 30 })) {
    errors.password = "Password must be between 9 and 30 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
