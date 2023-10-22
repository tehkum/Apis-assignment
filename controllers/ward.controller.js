const Ward = require("../models/ward.model");

const addWard = async (req, res) => {
  try {
    const ward = req.body;
    const newWard = new Ward({ ...ward });
    const stud = await newWard.save();
    return res.status(201).json({
      ward: stud,
      success: true,
      message: "Ward added successfully",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "internal server error", error: err });
  }
};

const getWard = async (req, res) => {
  try {
    const ward = await Ward.find();
    if (ward.length) {
      return res.status(201).json({
        ward,
        success: true,
        message: "Ward list retrieved successfully",
      });
    }
    return res.status(404).json({
      success: false,
      message: "No data in ward list",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "internal server error", error: err });
  }
};

const editWard = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const ward = await Ward.findByIdAndUpdate(id, data, { new: true });

    if (!ward) {
      return res.status(404).json({
        success: false,
        message: "No ward found",
      });
    }
    return res.status(201).json({
      ward,
      success: true,
      message: "Ward saved successfully",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "internal server error", error: err });
  }
};

const deleteWard = async (req, res) => {
  try {
    const { id } = req.params;
    const ward = await Ward.findByIdAndDelete(id);

    if (!ward) {
      return res.status(404).json({
        success: false,
        message: "No ward found",
      });
    }
    return res.status(201).json({
      ward,
      success: true,
      message: "Ward deleted successfully",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "internal server error", error: err });
  }
};

module.exports = { addWard, editWard, getWard, deleteWard };
