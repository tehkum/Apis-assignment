const Patient = require("../models/patient.model");

const addPatient = async (req, res) => {
  try {
    const patient = req.data;
    const newPatient = new Patient({ ...patient });
    const stud = await newPatient.save();
    return res.status(201).json({
      patient: stud,
      success: true,
      message: "Patient added successfully",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "internal server error", error: err });
  }
};

const getPatient = async (req, res) => {
  try {
    const patient = await Patient.find();
    if (patient.length) {
      return res.status(201).json({
        patient,
        success: true,
        message: "Patient list retrieved successfully",
      });
    }
    return res.status(404).json({
      success: false,
      message: "No data in patient list",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "internal server error", error: err });
  }
};

const editPatient = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const patient = await Patient.findByIdAndUpdate(id, data, { new: true });

    if (!patient) {
      return res.status(404).json({
        success: false,
        message: "No patient found",
      });
    }
    return res.status(201).json({
      patient,
      success: true,
      message: "Patient saved successfully",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "internal server error", error: err });
  }
};

const deletePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findByIdAndDelete(id);

    if (!patient) {
      return res.status(404).json({
        success: false,
        message: "No patient found",
      });
    }
    return res.status(201).json({
      patient,
      success: true,
      message: "Patient deleted successfully",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "internal server error", error: err });
  }
};

module.exports = { addPatient, editPatient, getPatient, deletePatient };
