const express = require('express');
const router = express.Router();
const comodinCtrl = require('../controllers/comodinCtrl');

router.get('/:quizzPlayerId', comodinCtrl.resetParamsQuizz);

module.exports = router;