const express = require("express");
const patient = express.Router();
const {
  addPatient,
  editPatient,
  getPatient,
  deletePatient,
} = require("../controllers/patient.controller");

patient.route("/").get(getPatient).post(addPatient);

patient.route("/:id").put(editPatient).delete(deletePatient);

module.exports = patient;
