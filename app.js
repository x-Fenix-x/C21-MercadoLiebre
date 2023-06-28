const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'home.html'));
});

app.listen(PORT, () =>
  console.log(`Server corriendo en http://localhost:${PORT}`)
);