const express = require('express');
const router = express.Router();

const tareasController = require('../controllers/tareas.controller');

const isAuth = require('../util/isAuth.js');

const isCoordinador = require('../util/isCoordinador');

const isRol = require('../util/isRol.js');

router.get('/main', isAuth,  tareasController.getTareas);

router.get('/crearTarea', isAuth,  tareasController.getCrearTareas);

router.post('/crearTarea', isAuth,  tareasController.postCrearTareas);

module.exports = router;