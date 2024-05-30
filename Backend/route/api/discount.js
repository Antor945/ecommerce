const express = require('express')
const {productdiscount,getallDiscount} = require('../../controller/discountController')
const router = express.Router()

router.post("/productdiscount",productdiscount);
router.get("/alldiscount",getallDiscount);


module.exports = router