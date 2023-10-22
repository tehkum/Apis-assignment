const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    class: {
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
      type: String,
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
