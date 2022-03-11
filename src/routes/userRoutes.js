const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userCtrl');

router.post('/signin', userCtrl.signIn);
router.post('/signup', userCtrl.signUp);
router.post('/forgot-password', userCtrl.forgotPassword);

module.exports = router;