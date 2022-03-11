const express = require('express');
const router = express.Router();
const groupCtrl = require('../controllers/groupsCtrl');

router.get('/:grupoId', groupCtrl.getOneByID);
router.get('/usuarios/:userId', groupCtrl.getAllByUserID);
router.get('/jugadores/:grupoId', groupCtrl.getAllFullByIDs);
router.post('/', groupCtrl.createGroup);
router.patch('/:grupoId', groupCtrl.editGroup);

module.exports = router;