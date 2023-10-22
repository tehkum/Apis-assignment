const express = require("express");
const teacher = express.Router();
const {
  addTeacher,
  editTeacher,
  getTeacher,
  deleteTeacher,
} = require("../controllers/teacher.controller");

teacher.route("/").get(getTeacher).post(addTeacher);

teacher.route("/:id").put(editTeacher).delete(deleteTeacher);

module.exports = teacher;
