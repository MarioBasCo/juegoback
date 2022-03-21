const express = require('express');
const router = express.Router();
const reportsCtrl = require('../controllers/reportsCtrl');

router.get('/:userId', reportsCtrl.getInfo);

module.exports = router;