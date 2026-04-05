const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('🚀 Pay1 server is LIVE');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});