const Student = require("../models/student.model");

const addStudent = async (req, res) => {
  try {
    const student = req.body;
    const newStudent = new Student({ ...student });
    const stud = await newStudent.save();
    return res.status(201).json({
      student: stud,
      success: true,
      message: "Student added successfully",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "internal server error", error: err });
  }
};

const getStudent = async (req, res) => {
  try {
    const student = await Student.find();
    if (student.length) {
      return res.status(201).json({
        student,
        success: true,
        message: "Student list retrieved successfully",
      });
    }
    return res.status(404).json({
      success: false,
      message: "No data in student list",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "internal server error", error: err });
  }
};

const editStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const student = await Student.findByIdAndUpdate(id, data, { new: true });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "No student found",
      });
    }
    return res.status(201).json({
      student,
      success: true,
      message: "Student saved successfully",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "internal server error", error: err });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndDelete(id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "No student found",
      });
    }
    return res.status(201).json({
      student,
      success: true,
      message: "Student deleted successfully",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "internal server error", error: err });
  }
};

module.exports = { addStudent, editStudent, getStudent, deleteStudent };
