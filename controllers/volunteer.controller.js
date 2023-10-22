const Volunteer = require("../models/volunteer.model");

const addVolunteer = async (req, res) => {
  try {
    const volunteer = req.data;
    const newVolunteer = new Volunteer({ ...volunteer });
    const stud = await newVolunteer.save();
    return res.status(201).json({
      volunteer: stud,
      success: true,
      message: "Volunteer added successfully",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "internal server error", error: err });
  }
};

const getVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.find();
    if (volunteer.length) {
      return res.status(201).json({
        volunteer,
        success: true,
        message: "Volunteer list retrieved successfully",
      });
    }
    return res.status(404).json({
      success: false,
      message: "No data in volunteer list",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "internal server error", error: err });
  }
};

const editVolunteer = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const volunteer = await Volunteer.findByIdAndUpdate(id, data, { new: true });

    if (!volunteer) {
      return res.status(404).json({
        success: false,
        message: "No volunteer found",
      });
    }
    return res.status(201).json({
      volunteer,
      success: true,
      message: "Volunteer saved successfully",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "internal server error", error: err });
  }
};

const deleteVolunteer = async (req, res) => {
  try {
    const { id } = req.params;
    const volunteer = await Volunteer.findByIdAndDelete(id);

    if (!volunteer) {
      return res.status(404).json({
        success: false,
        message: "No volunteer found",
      });
    }
    return res.status(201).json({
      volunteer,
      success: true,
      message: "Volunteer deleted successfully",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "internal server error", error: err });
  }
};

module.exports = { addVolunteer, editVolunteer, getVolunteer, deleteVolunteer };
