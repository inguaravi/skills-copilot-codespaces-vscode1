// Create web server
const express = require('express');
const app = express();
const path = require('path');

// Set up the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up the static folder
app.use(express.static(path.join(__dirname, 'public')));

// Set up the comments
const comments = [
    { username: 'Alice', comment: 'I love this place!' },
    { username: 'Bob', comment: 'This place is amazing!' },
    { username: 'Charlie', comment: 'This place is awesome!' },
];

// Set up the route
app.get('/', (req, res) => {
    res.render('home', { comments });
});
