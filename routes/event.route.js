const express = require("express");
const event = express.Router();
const {
  addEvent,
  editEvent,
  getEvent,
  deleteEvent,
} = require("../controllers/event.controller");

event.route("/").get(getEvent).post(addEvent);

event.route("/:id").put(editEvent).delete(deleteEvent);

module.exports = event;
