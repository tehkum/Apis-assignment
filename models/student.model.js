const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    grade: {
      type: Number,
    },
    attendance: {
      type: Number,
    },
    marks: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("students", studentSchema);

module.exports = Student;
