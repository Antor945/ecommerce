const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    telephone: {
        type: String,
    },
    addressOne: {
        type: String,
    },
    addressTwo: {
        type: String,
    },
    city: {
        type: String,
    },
    devision: {
        type: String,
    },
    postCode: {
        type: String,
    },
    distict: {
        type: String,
    },
    emailverified: {
        type: Boolean,
        default: false
    },
    userType: {
        type: String,
        default: "member",
        enum: ['member', 'merchant', 'admin']
    },
    created: {
        type: Date,
        default: new Date(),
    },
    updated: {
        type: Date
    }
});

module.exports = mongoose.model('user', userSchema)