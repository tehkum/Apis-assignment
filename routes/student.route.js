const express = require("express");
const student = express.Router();
const {
  addStudent,
  editStudent,
  getStudent,
  deleteStudent,
} = require("../controllers/student.controller");

student.route("/").get(getStudent).post(addStudent);

student.route("/:id").put(editStudent).delete(deleteStudent);

module.exports = student;
