// Example using Express.js
const express = require('express');
const app = express();
// Create an HTTP server

// Include route files
const usersRoute = require('./routes/users');
const productsRoute = require('./routes/products');

// Use routes
app.use('/users', usersRoute);
app.use('products', productsRoute);

// Example defining a route in Express
app.get('/', (req, res) => {
    res.send('<h1>Backend kata acep!</h1>');
});

// Example specifying the port and starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("server running on port ", PORT);
});