const express = require('express');
const app = express();

// Define routes or other application logic here

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
