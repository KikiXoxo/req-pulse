const express = require('express');
const reqPulse = require('../index');

const app = express();
const PORT = 3000;

app.use(reqPulse());

app.get('/', (req, res) => {
  res.send('Hello! req-pulse is working.');
});

app.get('/users', (req, res) => {
  res.json({ users: ['Alice', 'Bob', 'Charlie'] });
});

app.get('/redirect', (req, res) => {
  res.redirect('/');
});

app.get('/not-found', (req, res) => {
  res.status(404).send('Page not found');
});

app.get('/error', (req, res) => {
  res.status(500).send('Server error');
});

app.listen(PORT, () => {
  console.log(`Test server running on http://localhost:${PORT}`);
});
