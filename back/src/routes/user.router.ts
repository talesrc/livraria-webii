var express = require('express');
var router = express.Router();

const userController = require('../controllers/user.controller')

router.post('/create', userController.create)

router.get('/getAll', userController.getAll)

router.put('/update', userController.update)

router.delete('/delete', userController.delete)

router.get('/getByCPF/:cpf', userController.getByCPF)

module.exports = router;
