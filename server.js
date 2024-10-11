
const express = require('express');
const path = require('path');

const app = express();
const PORT = 1337; // You can change the port if needed

// Serve static files from the current directory
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'HTMLPage1.html')); // Change to your HTML file name
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});