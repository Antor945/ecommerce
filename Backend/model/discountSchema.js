const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const discountSchema = new Schema({
    percent: {
        type: Number
    },
    cash:{
        type:Number
    },
    flat:{
        type:Boolean,
        default:false
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:"categoryList"
    },
    subcategory:{
        type:Schema.Types.ObjectId,
        ref:"subcategoryList"
    },
    product:{
        type:Schema.Types.ObjectId,
        ref:"productList"
    },
    created: {
        type: Date,
        default: new Date(),
    },
    updated: {
        type: Date
    }
})

module.exports = mongoose.model("discount", discountSchema)