const express = require('express');

// Create the router object
const routes = express.Router();

routes.post('/users', (req, res) => {
    return res.json(req.body);
});

module.exports = routes;