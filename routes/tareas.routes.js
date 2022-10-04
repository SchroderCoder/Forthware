const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');
const tareasController = require('../controllers/tareas.controller');

router.get('/main', requiresAuth(), tareasController.getTareas);

router.get('/crearTarea', requiresAuth(), tareasController.getCrearTareas);

router.post('/crearTarea', requiresAuth(), tareasController.postCrearTareas);

router.get('/editarTarea/:id', requiresAuth(), tareasController.getEditarTareas);

router.post('/editarTarea',requiresAuth(),  tareasController.postEditarTareas);

router.post('/delete',requiresAuth(),tareasController.postdeleteTareas);

module.exports = router;