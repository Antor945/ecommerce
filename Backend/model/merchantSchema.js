const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const merchantSchema = new Schema({
    storename: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "product",
            required:true
        }
    ],
    officialemail: {
        type: String,
        required: true
    },
    officialphone: {
        type: Number,
        required: true
    },

    address: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: new Date(),
    },
    updated: {
        type: Date
    }
})
module.exports = mongoose.model('store', merchantSchema)