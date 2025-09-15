const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { spawn } = require("child_process");

const app = express();
const PORT = 5000;

// ✅ Middlewares
app.use(cors());
app.use(express.json());

// ✅ Ensure uploads folder exists
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// ✅ Setup multer
const upload = multer({ dest: "uploads/" });

// ✅ Route
app.post("/api/analyze", upload.single("image"), (req, res) => {
  console.log("📥 Incoming request to /api/analyze");

  if (!req.file) {
    console.log("⚠️ No file received!");
    return res.status(400).json({ error: "No image uploaded" });
  }

  console.log(`✅ File received: ${req.file.originalname}`);
  console.log(`   ➤ Size: ${req.file.size} bytes`);
  console.log(`   ➤ Mimetype: ${req.file.mimetype}`);
  console.log(`   ➤ Stored at: ${req.file.path}`);

  const imagePath = path.resolve(req.file.path);

  // ✅ Call Python script
  const python = spawn("python", ["backend/ml/predict.py", imagePath]);

  let result = "";
  let errorOutput = "";

  python.stdout.on("data", (data) => {
    result += data.toString();
  });

  python.stderr.on("data", (data) => {
    errorOutput += data.toString();
    console.error(`🐍 Python Error: ${data}`);
  });

  python.on("close", (code) => {
    console.log("🔚 Python script finished with code:", code);

    if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);

    if (code !== 0 || !result.trim()) {
      console.error("❌ Python script failed or returned empty result.");
      return res.status(500).json({ error: "AI processing failed", details: errorOutput });
    }

    res.json({ skinType: result.trim() });
  });
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
