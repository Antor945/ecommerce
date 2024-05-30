const express = require('express')
const registration = require('../../controller/registrationController')
const {emailVerification,verificationController} = require('../../controller/emailVerification')
const loginController = require('../../controller/loginController')
const router = express.Router()



router.use('/registration',registration);
router.use('/emailVerification',emailVerification);
router.use('/login',loginController);
router.get('/verification/:id',verificationController);


module.exports = router