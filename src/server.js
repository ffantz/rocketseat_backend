const express = require('express');
// import express from 'express';   ES6 module

// Initialize Express
const app = express();

// Listen to a route (request, response)
app.get('/', (req, res) => {                    // Methods: GET, POST, PUT, DELETE
    return res.json({'message':'Hello World'}); // JSON response
    // return res.send('Hello World');          // Basic response (text)
});

// Listen to a port
app.listen(3333);