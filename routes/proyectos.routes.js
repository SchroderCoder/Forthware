const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');
const proyectoController = require('../controllers/proyectos.controller');
const jwtAuthz= require ("express-jwt-authz");
const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const checkJwt = auth({
    audience: 'https://permissions/api',
    issuerBaseURL: `http://localhost:3000`,
  });

const checkScopes = requiredScopes('crear:proyectos');

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

router.post('/OneProyecto', requiresAuth(), proyectoController.postoneProyecto);


module.exports = router;