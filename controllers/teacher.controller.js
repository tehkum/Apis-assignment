const Teacher = require("../models/teacher.model");

const addTeacher = async (req, res) => {
  try {
    const teacher = req.body;
    const newTeacher = new Teacher({ ...teacher });
    const tea = await newTeacher.save();
    return res.status(201).json({
      teacher: tea,
      success: true,
      message: "Teacher added successfully",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "internal server error", error: err });
  }
};

const getTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.find();
    if (teacher.length) {
      return res.status(201).json({
        teacher,
        success: true,
        message: "Teacher list retrieved successfully",
      });
    }
    return res.status(404).json({
      success: false,
      message: "No data in teacher list",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "internal server error", error: err });
  }
};

const editTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const teacher = await Teacher.findByIdAndUpdate(id, data, { new: true });

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "No teacher found",
      });
    }
    return res.status(201).json({
      teacher,
      success: true,
      message: "Teacher saved successfully",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "internal server error", error: err });
  }
};

const deleteTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const teacher = await Teacher.findByIdAndDelete(id);

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "No teacher found",
      });
    }
    return res.status(201).json({
      teacher,
      success: true,
      message: "Teacher deleted successfully",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "internal server error", error: err });
  }
};

module.exports = { addTeacher, editTeacher, getTeacher, deleteTeacher };
