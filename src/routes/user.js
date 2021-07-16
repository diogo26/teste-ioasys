const router = require('express').Router();
const {userController} = require('../controllers');


router.post('/',userController.createUser);
router.post('/:token/password',userController.resetPasswordUser);

module.exports = router;