const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { spawn } = require("child_process");

const app = express();
const PORT = 5000;

// Middleware (order is important)
app.use(cors());
app.use(express.json()); 

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer setup
const upload = multer({ dest: uploadDir });

// Route: Analyze skin image
app.post("/api/analyze", upload.single("image"), (req, res) => {
  console.log("Request received at /api/analyze");

  console.log("Multer req.file status:", req.file ? "File found and saved." : "File NOT found (req.file is undefined).");
  
  if (!req.file) {
    console.log("No image uploaded: Terminating request.");
    return res.status(400).json({ error: "No image uploaded" });
  }

  const imagePath = path.resolve(req.file.path);
  console.log(`Image saved successfully at: ${imagePath}`);

  const pythonScript = path.join(__dirname, "ml", "predict.py");
  
  // 🚨 CRITICAL FIX: Add environment variable to force UTF-8 encoding in Python
  const python = spawn("python", [pythonScript, imagePath], {
    env: { 
      ...process.env, // Preserve existing environment variables
      PYTHONIOENCODING: 'utf-8' // Force UTF-8 for I/O streams
    }
  });
  
  // NOTE: Remember to apply the absolute path fix and TF_CPP_MIN_LOG_LEVEL = '3'
  // inside your predict.py for best results.

  let resultBuffer = "";
  let errorOutput = "";

  python.stdout.on("data", (data) => {
    resultBuffer += data.toString();
  });

  python.stderr.on("data", (data) => {
    errorOutput += data.toString();
    console.error("Python Error:", data.toString());
  });

  python.on("close", (code) => {
    console.log(`Python script exited with code ${code}`);

    // Clean up: Always attempt to delete the temporary file
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    // --- Clean Prediction Extraction ---
    const outputLines = resultBuffer.split('\n');
    const finalResult = outputLines
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .pop();

    console.log("Final Skin Type Extracted and Sent:", finalResult);

    if (code !== 0 || !finalResult) {
      console.error("Prediction failed or empty result");
      return res.status(500).json({
        error: "AI processing failed",
        details: errorOutput || "No prediction output found.",
      });
    }

    // Send the clean result back to the React frontend
    res.json({ skinType: finalResult });
  });
});

// Route: Get products by skin type (kept for completeness)
app.get("/api/products", (req, res) => {
  const skinType = req.query.skinType?.toLowerCase();

  const allProducts = {
    oily: [
      { id: 1, name: "Oil-Free Moisturizer", description: "Hydrates without clogging pores", price: 299 },
      { id: 2, name: "Mattifying Sunscreen", description: "Controls shine and protects skin", price: 399 },
    ],
    dry: [
      { id: 3, name: "Hydrating Cream", description: "Deep moisture for dry skin", price: 349 },
      { id: 4, name: "Gentle Cleanser", description: "Cleans without stripping oils", price: 279 },
    ],
    normal: [
      { id: 5, name: "Balanced Moisturizer", description: "Maintains skin equilibrium", price: 319 },
      { id: 6, name: "Daily SPF Lotion", description: "Lightweight protection for everyday use", price: 359 },
    ],
  };

  if (!skinType || !allProducts[skinType]) {
    return res.status(404).json({ error: "No products found for the selected skin type." });
  }

  res.json(allProducts[skinType]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});