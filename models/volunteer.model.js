// volunteer's name, contact information, skills, availability, and areas of interest
const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contact: {
      phoneNo: {
        type: String,
      },
      address: {
        type: String,
      },
    },
    skills: [
      {
        type: String,
      },
    ],
    available: {
      type: Boolean,
      default: true,
    },
    areaOfInterest: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Volunteer = mongoose.model("volunteers", volunteerSchema);

module.exports = Volunteer;
