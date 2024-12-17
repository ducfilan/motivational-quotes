const express = require('express');
const cors = require('cors');
const quotes = require('./quotes.json');

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Serve static files from public directory
app.use(express.static('public'));

// API endpoint to get a random quote
app.get('/api/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json(quotes[randomIndex]);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 