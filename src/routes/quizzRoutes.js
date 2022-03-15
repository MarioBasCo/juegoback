const express = require('express');
const router = express.Router();
const quizzCtrl = require('../controllers/quizzCtrl');

router.get('/', quizzCtrl.getAll);
router.get('/:cuestionarioId', quizzCtrl.getOne);
router.get('/search/:codigo', quizzCtrl.getOneSearch);
router.get('/usuarios/:userId', quizzCtrl.getAllByUserID);
router.post('/', quizzCtrl.createCuestionario);
router.patch('/:cuestionarioId', quizzCtrl.updateParamQuizz);
router.delete('/:cuestionarioId', quizzCtrl.deleteQuizz);

module.exports = router;