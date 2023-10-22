const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    contact: {
      phoneNo: {
        type: String,
      },
      address: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const Teacher = mongoose.model("teachers", teacherSchema);

module.exports = Teacher;
