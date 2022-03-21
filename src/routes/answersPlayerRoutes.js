const express = require('express');
const router = express.Router();
const ansPlayerCtrl = require('../controllers/respPlayerCtrl');

router.get('/:quizzPlayerId', ansPlayerCtrl.getAnswerPlayer);
router.get('/:cuestionarioId/:jugadorId', ansPlayerCtrl.validateResolve);
router.post('/', ansPlayerCtrl.createNew);

module.exports = router;