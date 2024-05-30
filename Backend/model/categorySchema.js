const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: false
    },
    subCategory: [
        {
            type: Schema.Types.ObjectId,
            ref: "subcategoryList"
        },
    ],
    status: {
        type: String,
        default: "waiting",
        enum: ["waiting", "reject", "approved"]
    },
    created: {
        type: Date,
        default: new Date(),
    },
    updated: {
        type: Date
    }
}
)

module.exports = mongoose.model('categoryList', categorySchema);