const express = require('express')
const router = express.Router()
const apiroute = require('./api/index')

router.use("/api/v1", apiroute)
module.exports = router;