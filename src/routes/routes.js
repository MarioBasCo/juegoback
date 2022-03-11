const express = require('express');
const router = express.Router();

router.use('/api/cuestionarios', require('./quizzRoutes'));
router.use('/api/grupos', require('./groupsRoutes'));
router.use('/api/jugadores', require('./playerRoutes'));
router.use('/api/usuarios', require('./userRoutes'));
router.use('/api/preguntas', require('./questionsRoutes'));

module.exports = router;