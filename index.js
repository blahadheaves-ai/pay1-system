const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 Pay1 server is LIVE');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.get('/pay1', (req, res) => {
  res.json({
    status: "active",
    message: "Pay1 system endpoint working",
    timestamp: Date.now()
  });
});

app.get('/pay1', (req, res) => {
  res.json({
    status: "active",
    message: "Pay1 system endpoint working",
    timestamp: Date.now()
  });
});