const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');
const proyectoController = require('../controllers/proyectos.controller');
const Proyecto_lock = require('../util/Proyecto_lock');
const Etiqueta_lock = require('../util/Etiqueta_lock');
  
router.get('/main',requiresAuth(), proyectoController.getProyectos);

router.get('/crearProyecto',requiresAuth(), Proyecto_lock, proyectoController.getCrearProyecto);

router.post('/crearProyecto',requiresAuth(), Proyecto_lock, proyectoController.postCrearProyecto);

router.get('/crearEtiqueta',requiresAuth(), Etiqueta_lock, proyectoController.getCrearEtiqueta);

router.post('/crearEtiqueta', requiresAuth(), Etiqueta_lock,  proyectoController.postCrearEtiqueta);

router.get('/editarProyecto/:id',requiresAuth(), Proyecto_lock, proyectoController.getEditarProyecto);

router.post('/editarProyecto', requiresAuth(), Proyecto_lock, proyectoController.postEditarProyecto);

router.get('/editarEtiqueta/:id', requiresAuth(), Etiqueta_lock,proyectoController.getEditarEtiqueta);

router.post('/editarEtiqueta',requiresAuth(), Etiqueta_lock,proyectoController.postEditarEtiqueta);

router.get('/delete/:id',requiresAuth(), Etiqueta_lock, proyectoController.getDeleteProyecto);

router.post('/OneProyecto', requiresAuth(), proyectoController.postoneProyecto);


module.exports = router;