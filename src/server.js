const express = require('express');

// Use the dot symbol to specify that you aren't importing any extern lib, but a local module
const routes = require('./routes');

const app = express();

app.use(express.json());

// Use after the JSON Express
app.use(routes);

app.listen(3333);