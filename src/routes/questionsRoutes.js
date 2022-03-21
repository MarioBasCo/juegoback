const express = require('express');
const router = express.Router();
const questionCtrl = require('../controllers/questionsCtrl');
const upload = require('../libs/upload');

router.get('/:cuestionarioId', questionCtrl.getAllByQuizzID);
router.post('/', upload.single('img'), questionCtrl.createQuestion);
router.delete('/:preguntaId', questionCtrl.deleteQuestion);

module.exports = router;