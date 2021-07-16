const router = require('express').Router();
const {authController} = require('../controllers');

router.post('/singIn',authController.authUser);
router.post('/forgotPassword',authController.forgotPasswordUser);

module.exports = router;