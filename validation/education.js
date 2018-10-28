const Validator = require("validator");
const isEmpty = require("./is-empty.js");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldOfStudy = !isEmpty(data.fieldOfStudy) ? data.fieldOfStudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.school)) {
    errors.school = "Schoolfield is Required";
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree field is Required";
  }

  if (Validator.isEmpty(data.fieldOfStudy)) {
    errors.fieldOfStudy = "Field of Study field is Required";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is Required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
