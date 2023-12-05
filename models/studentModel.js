// studentModel.js
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  student_name: String,
  roll_No: Number,
});

module.exports = {
  SemesterOne: mongoose.model("SemesterOne", studentSchema),
  SemesterTwo: mongoose.model("SemesterTwo", studentSchema),
  SemesterThree: mongoose.model("SemesterThree", studentSchema),
  SemesterFour: mongoose.model("SemesterFour", studentSchema),
  SemesterFive: mongoose.model("SemesterFive", studentSchema),
  SemesterSix: mongoose.model("SemesterSix", studentSchema),
};
