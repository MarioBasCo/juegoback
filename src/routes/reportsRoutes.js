const express = require('express');
const router = express.Router();
const reportsCtrl = require('../controllers/reportsCtrl');
const reportsQuizzCtrl = require('../controllers/reportsQuizzCtrl');

router.get('/:userId', reportsCtrl.getInfo);
router.get('/averages/:userId', reportsCtrl.averages);
router.get('/percentages/:userId', reportsCtrl.averagesPorcent);
router.get('/resultados/:cuestionarioId', reportsQuizzCtrl.getResultQuizz);
router.get('/resultados/search/:quizzPlayerId', reportsQuizzCtrl.getResultOneQuizz);

module.exports = router;