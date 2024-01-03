//Import area
const { mongoose } = require("../config/db");
let studentSchema = {
  name: String,
  surname: String,
};
const Student = mongoose.model("Student", { studentSchema });

//exports
exports.Student = Student;
