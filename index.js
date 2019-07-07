const path = require('path');
const express = require('express');

const todoRoutes = require('./routes/todo');

const app = express();
const PORT = process.env.PORT || 3000;

// static view
app.use(express.static(path.join(__dirname, 'public')));

// init router
app.use('/api/todo', todoRoutes);

// send index
app.use((req, res, next) => {
  res.sendFile('/index.html');
});

// init server
app.listen(PORT, () => {
  console.log(`App listen to port ${PORT}`);
});
