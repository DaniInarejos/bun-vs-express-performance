const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (_req, res) => {
  res.send('Hola mundo');
});

app.listen(PORT, () => {
  console.log(`✅ Express server escuchando en http://localhost:${PORT}`);
});