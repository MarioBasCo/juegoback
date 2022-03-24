const express = require('express');
const router = express.Router();
const reportsCtrl = require('../controllers/reportsCtrl');

router.get('/:userId', reportsCtrl.getInfo);
router.get('/averages/:userId', reportsCtrl.averages);
router.get('/percentages/:userId', reportsCtrl.averagesPorcent);

module.exports = router;