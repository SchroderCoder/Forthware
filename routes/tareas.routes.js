const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');
const tareasController = require('../controllers/tareas.controller');
const jwtAuthz = require ("express-jwt-authz");

router.get('/main', requiresAuth(), tareasController.getTareas);

router.get('/crearTarea', requiresAuth(), tareasController.getCrearTareas);

router.post('/crearTarea', requiresAuth(), tareasController.postCrearTareas);

router.get('/editarTarea/:id', requiresAuth(), tareasController.getEditarTareas);

router.post('/editarTarea',requiresAuth(),  tareasController.postEditarTareas);

router.get('/delete/:id',requiresAuth(),tareasController.getdeleteTareas);

router.post('/OneTarea', requiresAuth(), tareasController.postoneTarea);

module.exports = router;