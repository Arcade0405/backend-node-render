import express from "express";
import cors from "cors";
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("❌ MongoDB connection error:", err));
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend Node.js đang hoạt động 🚀");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Xin chào từ backend Node.js 👋" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server chạy tại cổng ${PORT}`));