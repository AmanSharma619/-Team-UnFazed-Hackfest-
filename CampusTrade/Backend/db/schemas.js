// models/User.js
const mongoose = require('mongoose');

// Define a schema for the User model
const userSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
       
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create a User model
const User = mongoose.model('User', userSchema);
console.log("Done")

module.exports = User;
