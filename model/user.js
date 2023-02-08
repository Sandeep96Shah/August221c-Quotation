// import the monggose package
const mongoose = require('mongoose');

// defined the schemaa
// camel case
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    quotations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Quotations"
        }
    ]
});

const Users = mongoose.model('user', userSchema);

module.exports = Users;