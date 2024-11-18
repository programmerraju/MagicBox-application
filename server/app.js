const express = require("express");
const connectDB = require("./db");
const bodyParser = require("body-parser");
const cors = require("cors");

connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const applicationSchema = new mongoose.Schema({
  teamName: String,
  contactName: String,
  email: String,
  phone: String,
  teamMembers: String,
  title: String,
  problemStatement: String,
  solution: String,
  pillars: [String],
  techStack: String,
  scalability: String,
  alignment: String,
  benefits: String,
  metrics: String,
});

const Application = mongoose.model("Application", applicationSchema);

app.post("/submit", async (req, res) => {
  try {
    const application = new Application(req.body);
    await application.save();
    res.json({ message: "Application submitted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error submitting application." });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
