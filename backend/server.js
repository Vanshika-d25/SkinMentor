const express = require('express');
const cors = require('cors');
const products = require('./data/products');

const app = express();
app.use(cors());
app.use(express.json()); // to parse JSON from requests

// 🔐 In-memory user store (you can replace with DB later)
const users = [
  { email: 'test@example.com', password: '123456' }
];

// ✅ Login Route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({
      message: 'Login successful',
      user: { email },
      token: 'fake-token-123' // Replace with real JWT later
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

// 🆕 ✅ Register Route
app.post('/api/register', (req, res) => {
  const { email, password } = req.body;

  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(409).json({ message: 'User already exists' });
  }

  users.push({ email, password });
  res.status(201).json({ message: 'Registration successful', user: { email } });
});

// 🛍 Products API
app.get('/api/products', (req, res) => {
  const { skinType } = req.query;
  const result = products[skinType];

  if (!result) {
    return res.status(400).json({ error: 'Invalid skin type' });
  }

  res.json(result);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
