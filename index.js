const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "static" directory
app.use(express.static(path.join(__dirname, 'static')));

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
