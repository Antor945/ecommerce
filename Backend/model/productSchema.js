const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    store: {
        type: Schema.Types.ObjectId,
        ref: 'store',
        required: true
    },
    variant: [
        {
            type: Schema.Types.ObjectId,
            ref: 'variant',
            required: true
        }
    ],
    created: {
        type: Date,
        default: new Date(),
    },
    updated: {
        type: Date
    }
})

module.exports = mongoose.model('productList', productSchema)