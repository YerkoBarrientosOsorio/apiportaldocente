const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    rut: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user', userSchema);