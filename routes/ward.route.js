const express = require("express");
const ward = express.Router();
const {
  addWard,
  editWard,
  getWard,
  deleteWard,
} = require("../controllers/ward.controller");

ward.route("/").get(getWard).post(addWard);

ward.route("/:id").put(editWard).delete(deleteWard);

module.exports = ward;
