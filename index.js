const path = require('path');

const express = require('express');
const app = express();
const PORT = process.env.port || 3000;

// static view
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.sendFile('/index.html');
});

app.listen(PORT, () => {
  console.log(`App listen to port ${PORT}`);
});
