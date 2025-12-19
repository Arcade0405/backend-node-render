const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("❌ MongoDB connection error:", err));
const app = express();
app.use(cors()); // Cho phép frontend gọi API từ domain khác (Netlify)

app.get("/", (req, res) => {
  res.send("Backend Node.js đang hoạt động 🚀");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Xin chào từ backend Node.js 👋" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server đang chạy tại cổng ${PORT}`));