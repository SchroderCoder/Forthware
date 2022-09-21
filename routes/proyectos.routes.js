const express = require('express');
const router = express.Router();

const proyectoController = require('../controllers/proyectos.controller');

const isAuth = require('../util/isAuth.js');

const proyecto_lock = require('../util/Proyecto_lock');

router.get('/main', isAuth, proyectoController.getProyectos);

router.get('/crearProyecto', isAuth, proyecto_lock, proyectoController.getCrearProyecto);

router.post('/crearProyecto', isAuth, proyecto_lock,  proyectoController.postCrearProyecto);

router.get('/crearEtiqueta', isAuth, proyecto_lock, proyectoController.getCrearEtiqueta);

router.post('/crearEtiqueta', isAuth, proyecto_lock, proyectoController.postCrearEtiqueta);

router.get('/editarProyecto/:id', isAuth, proyecto_lock, proyectoController.getEditarProyecto);

router.post('/editarProyecto', isAuth, proyecto_lock, proyectoController.postEditarProyecto);

router.get('/editarEtiqueta/:id', isAuth, proyecto_lock, proyectoController.getEditarEtiqueta);

router.post('/editarEtiqueta', isAuth,proyecto_lock,  proyectoController.postEditarEtiqueta);



module.exports = router;