const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');
const reportesController = require('../controllers/reportes.controller');
const Reporte_lock = require('../util/Reporte_lock');

router.get('/main',  requiresAuth(), Reporte_lock, reportesController.getReportes);

router.get('/crearReporte', requiresAuth(), Reporte_lock, reportesController.getCrearReporte);

router.post('/crearReporte', requiresAuth(), Reporte_lock, reportesController.postCrearReporte);

router.post('/buscar', requiresAuth(), Reporte_lock, reportesController.postBuscar);

router.post('/suma_completo', requiresAuth(), Reporte_lock, reportesController.postCompleto);

router.post('/horas_hombre', requiresAuth(), Reporte_lock,reportesController.postHorasHombre);

router.get('/delete/:id',requiresAuth(), Reporte_lock, reportesController.getDeleteReporte);
 

module.exports = router;