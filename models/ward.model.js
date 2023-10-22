// ward number, capacity, and specializations (e.g., pediatrics, surgery, ICU).
const mongoose = require("mongoose");

const wardSchema = new mongoose.Schema(
  {
    wardNo: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Ward = mongoose.model("wards", wardSchema);

module.exports = Ward;
