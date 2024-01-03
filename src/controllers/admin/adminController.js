const { validationResult } = require("express-validator");
const { Student } = require("../../models/Student");

//JavaScript HOF
let adminController = (req, res) => {
  //DB database Server insert
  //Validator Check
  let errors = validationResult(req);
  if (errors.isEmpty()) {
    //Error

    //const object=new Class name();
    const studentObject = new Student({
      name: req.query.name,
      surname: req.query.surname,
    });
    studentObject
      .save()
      .then((d) => {
        res.status(200).json({
          message: "Student inserted successfulluy",
        });
      })
      .catch((e) => {
        res.status(400).json({
          message: "error",
          data: errors,
        });
      });
  } else {
    //False
    res.status(400).json({
      message: "Validation error",
    });
  }
};
//Exports
module.exports = { adminController };
