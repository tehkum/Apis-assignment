const express = require("express");
const volunteer = express.Router();
const {
  addVolunteer,
  editVolunteer,
  getVolunteer,
  deleteVolunteer,
} = require("../controllers/volunteer.controller");

volunteer.route("/").get(getVolunteer).post(addVolunteer);

volunteer.route("/:id").put(editVolunteer).delete(deleteVolunteer);

module.exports = volunteer;
