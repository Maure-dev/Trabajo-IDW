const express = require('express');
const app = express();
const { join, dirname } = require('path');
const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '..', 'index.html'));
});

app.use(express.static(join(__dirname, 'src')));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server error');
});


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});