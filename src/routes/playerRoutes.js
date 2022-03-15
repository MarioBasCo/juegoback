const express = require('express');
const router = express.Router();
const playerCtrl = require('../controllers/playerCtrl');

router.post('/', playerCtrl.createPlayer);
router.get('/full/:userId', playerCtrl.getFullPlayerByUserId);
router.patch('/:jugadorId', playerCtrl.updatePlayer);
router.delete('/:jugadorId', playerCtrl.deletePlayer);

module.exports = router;