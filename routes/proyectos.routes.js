const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');
const proyectoController = require('../controllers/proyectos.controller');
const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');

const {
  claimEquals,
  claimIncludes,
  claimCheck,
} = require('express-openid-connect');
  
router.get('/main',requiresAuth(), proyectoController.getProyectos);

router.get('/crearProyecto',requiresAuth(), proyectoController.getCrearProyecto);

router.post('/crearProyecto',requiresAuth(), proyectoController.postCrearProyecto);

router.get('/crearEtiqueta',requiresAuth(), proyectoController.getCrearEtiqueta);

router.post('/crearEtiqueta', requiresAuth(),  proyectoController.postCrearEtiqueta);

router.get('/editarProyecto/:id',requiresAuth(), proyectoController.getEditarProyecto);

router.post('/editarProyecto', requiresAuth(), proyectoController.postEditarProyecto);

router.get('/editarEtiqueta/:id', requiresAuth(),proyectoController.getEditarEtiqueta);

router.post('/editarEtiqueta',requiresAuth(),proyectoController.postEditarEtiqueta);

router.get('/delete/:id',requiresAuth(),proyectoController.getDeleteProyecto);


module.exports = router;