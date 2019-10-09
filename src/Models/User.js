const mongoose = require('mongoose');

// User structure
const UserSchema = new mongoose.Schema({
    email: String,
});

module.exports = mongoose.model('User', UserSchema);