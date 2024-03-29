'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Tópicos Avançados em SI - Unasp 2023.1 - Prof. Dudarts');
});

app.get('/rota', (req, res) => {
  res.send('Testando a rota "Rota"');
});

app.get('/oxe', (req, res) => {
  res.send('oxe oxe oxe, aqui é barril!');
});

app.get('/barril', (req, res) => {
  res.send('Barril dobrado');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
