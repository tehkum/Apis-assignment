// event name, date, location, description, and the required number of volunteers for each role.
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    volunteers: [
      {
        role: {
          type: String,
        },
        numberOfVolunteerRequired: {
          type: Number,
        },
      },
    ],
    appliedVolunteer: [
      { type: mongoose.Schema.Types.ObjectId, ref: "volunteers" },
    ],
  },
  { timestamps: true }
);

const Event = mongoose.model("events", eventSchema);

module.exports = Event;
