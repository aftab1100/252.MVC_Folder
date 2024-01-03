const { check } = require("express-validator");
let studentValidator = [
  check("name", "First Name is required").notEmpty(),
  check("surname", "surname Name is require").notEmpty(),
];
exports.studentValidator = studentValidator;
