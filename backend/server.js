const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// In-memory location storage
let userLocation = null;

// Endpoint to save location from the frontend
app.post("/save-location", (req, res) => {
  const { latitude, longitude } = req.body;
  userLocation = { latitude, longitude, timestamp: new Date() };
  res.status(200).send({ message: "Location saved successfully!" });
});

// Endpoint to get the saved location
app.get("/get-location", (req, res) => {
  if (userLocation) {
    res.status(200).send(userLocation);
  } else {
    res.status(404).send({ error: "No location available" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
