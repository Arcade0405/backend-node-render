const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("❌ MongoDB connection error:", err));
const app = express();
app.use(cors()); // Cho phép frontend gọi API từ domain khác (Netlify)

app.get("/", (req, res) => {
  res.json({ message: "Backend CI/CD OK" });
});

app.listen(3000);