const Event = require("../models/event.model");

const addEvent = async (req, res) => {
  try {
    const event = req.data;
    const newEvent = new Event({ ...event });
    const stud = await newEvent.save();
    return res.status(201).json({
      event: stud,
      success: true,
      message: "Event added successfully",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "internal server error", error: err });
  }
};

const getEvent = async (req, res) => {
  try {
    const event = await Event.find();
    if (event.length) {
      return res.status(201).json({
        event,
        success: true,
        message: "Event list retrieved successfully",
      });
    }
    return res.status(404).json({
      success: false,
      message: "No data in event list",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "internal server error", error: err });
  }
};

const editEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const event = await Event.findByIdAndUpdate(id, data, { new: true });

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "No event found",
      });
    }
    return res.status(201).json({
      event,
      success: true,
      message: "Event saved successfully",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "internal server error", error: err });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByIdAndDelete(id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "No event found",
      });
    }
    return res.status(201).json({
      event,
      success: true,
      message: "Event deleted successfully",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "internal server error", error: err });
  }
};

module.exports = { addEvent, editEvent, getEvent, deleteEvent };
