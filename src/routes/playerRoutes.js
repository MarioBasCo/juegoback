const express = require('express');
const router = express.Router();
const playerCtrl = require('../controllers/playerCtrl');

router.post('/', playerCtrl.createPlayer);
router.get('/full/:userId', playerCtrl.getFullPlayerByUserId);

module.exports = router;