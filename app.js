const express = require('express');
const app = express();
const port = 3000; // Choose a port number, e.g., 3000
const path = require('path');


const publicDirectoryPath = path.join(__dirname);
app.use(express.static(publicDirectoryPath));




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




