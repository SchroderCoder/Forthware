const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');
const reportesController = require('../controllers/reportes.controller');


router.get('/main',  requiresAuth(),reportesController.getReportes);

router.get('/crearReporte', requiresAuth(), reportesController.getCrearReporte);

router.post('/crearReporte', requiresAuth(), reportesController.postCrearReporte);

router.post('/buscar', reportesController.postBuscar);

router.post('/suma_completo', reportesController.postCompleto);

router.post('/horas_hombre', reportesController.postCompleto);

router.get('/download', reportesController.download);


module.exports = router;