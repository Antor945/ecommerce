const mongoose = require("mongoose");
const { Schema } = mongoose;

const subCategory = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "waiting",
        enum: ["waiting", "reaject", "approved"]
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "CategoryList",
        required: true,
    },
    isActive: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: new Date(),
    },
    updated: {
        type: Date
    }
})

module.exports = mongoose.model('subcategoryList', subCategory)