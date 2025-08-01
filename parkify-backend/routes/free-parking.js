const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const FreeParking = require("./models/FreeParking");  

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Your free-parking route
app.get("/api/free-parking", async (req, res) => {
  try {
    const spots = await FreeParking.find({});
    res.json(spots);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Database connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error("❌ MongoDB connection error:", err));
