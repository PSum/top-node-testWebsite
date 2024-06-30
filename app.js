// filename: app.js 
const express = require('express');
const path = require('path');

const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './ressources/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, './ressources/about.html'));
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, './ressources/404.html'));
});