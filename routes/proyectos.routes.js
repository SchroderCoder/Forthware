const express = require('express');
const router = express.Router();

const proyectoController = require('../controllers/proyectos.controller');

const isAuth = require('../util/isAuth.js');

const isCoordinador = require('../util/isCoordinador');

const isRol = require('../util/isRol.js');

router.get('/main', isAuth, proyectoController.getProyectos);

router.get('/crearProyecto', isAuth, proyectoController.getCrearProyecto);

router.get('/editarProyecto', isAuth,proyectoController.getEditarProyecto);


module.exports = router;