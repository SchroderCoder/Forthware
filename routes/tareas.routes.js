const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');
const tareasController = require('../controllers/tareas.controller');

const isAuth = require('../util/isAuth.js');

router.get('/main', isAuth,  tareasController.getTareas);

router.get('/crearTarea', isAuth,  tareasController.getCrearTareas);

router.post('/crearTarea', isAuth,  tareasController.postCrearTareas);

router.get('/editarTarea/:id', isAuth,  tareasController.getEditarTareas);

router.post('/editarTarea', isAuth,  tareasController.postEditarTareas);

module.exports = router;