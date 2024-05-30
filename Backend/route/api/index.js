const express = require('express')
const authentication = require('./authentication')
const category = require('../api/category')
const merchant = require('../api/merchant')
const product = require('../api/product')
const discount = require('../api/discount')
const router = express.Router()



router.use("/authentication", authentication);
router.use("/category", category);
router.use('/merchant', merchant);
router.use('/product', product)
router.use('/discount',discount)

module.exports = router