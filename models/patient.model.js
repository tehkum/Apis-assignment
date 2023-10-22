// patient's name, age, gender, medical history, contact information, and assigned ward.
const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
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
  medicationHistory: {
    type: String,
  },
  contact: {
    phoneNo: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  assignedWard: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "wards",
  },
}, { timestamps: true });

const Patient = mongoose.model("patients", patientSchema);

module.exports = Patient;
