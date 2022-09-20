const express = require('express');
const router = express.Router();

const proyectoController = require('../controllers/proyectos.controller');

const isAuth = require('../util/isAuth.js');

const isCoordinador = require('../util/isCoordinador');

const isRol = require('../util/isRol.js');

router.get('/main', isAuth, proyectoController.getProyectos);

router.get('/crearProyecto', isAuth,   proyectoController.getCrearProyecto);

router.post('/crearProyecto', isAuth,  proyectoController.postCrearProyecto);

router.get('/crearEtiqueta', isAuth, proyectoController.getCrearEtiqueta);

router.post('/crearEtiqueta', isAuth, proyectoController.postCrearEtiqueta);

router.get('/editarProyecto/:id', isAuth, proyectoController.getEditarProyecto);

router.post('/editarProyecto', isAuth, proyectoController.postEditarProyecto);



module.exports = router;