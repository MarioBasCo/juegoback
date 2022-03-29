const express = require('express');
const router = express.Router();
const ansPlayerCtrl = require('../controllers/respPlayerCtrl');
const comodinCtrl = require('../controllers/comodinCtrl');

router.get('/:quizzPlayerId', ansPlayerCtrl.getAnswerPlayer);
router.get('/:cuestionarioId/:jugadorId', ansPlayerCtrl.validateResolve);
router.post('/', ansPlayerCtrl.createNew);
router.post('/comodin/', comodinCtrl.createNew);

module.exports = router;