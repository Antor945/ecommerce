const express = require('express');
const router = express.Router();
const {becomeMerchant,getAllsotreController} = require('../../controller/becomeMerchant')


router.use('/becomeMerchant', becomeMerchant);
router.get('/getAllStore',getAllsotreController)

module.exports = router;