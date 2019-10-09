const express = require('express');

// Lib to manipulate mongoDB
const mongoose = require('mongoose');
const cors = require('cors');

// Use the dot symbol to specify that you aren't importing any extern lib, but a local module
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://ffantz:fantz123@omnistack-df8j9.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());

// Use after the JSON Express
app.use(routes);

app.listen(3333);