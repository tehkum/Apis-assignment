const express = require("express");
const cors = require("cors");
require("./db");
const student = require("./routes/student.route");
const teacher = require("./routes/teacher.route");
const event = require("./routes/event.route");
const volunteer = require("./routes/volunteer.route");
const ward = require("./routes/ward.route");
const patient = require("./routes/patient.route");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/student", student);
app.use("/teacher", teacher);
app.use("/event", event);
app.use("/volunteer", volunteer);
app.use("/ward", ward);
app.use("/patient", patient);

app.get("/", (req, res) => {
  res.send("Hello Express app!");
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ message: "Something went wrong" });
});

app.listen(3000, () => {
  console.log("server started");
});
