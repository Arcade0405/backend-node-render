const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("❌ MongoDB connection error:", err));
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Backend CI/CD O.K/" });
});

app.listen(3000);