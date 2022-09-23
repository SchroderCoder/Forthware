const express = require('express');
const router = express.Router();

const reportesController = require('../controllers/reportes.controller');

const isAuth = require('../util/isAuth.js');

const reporte_lock = require('../util/Reporte_lock');

router.get('/main', isAuth, reporte_lock, reportesController.getReportes);

router.get('/crearReporte', isAuth, reporte_lock, reportesController.getCrearReporte);

router.post('/crearReporte', isAuth, reporte_lock, reportesController.postCrearReporte);

router.post('/buscar', reportesController.postBuscar);

router.post('/suma_completo', reportesController.postCompleto);

router.post('/horas_hombre', reportesController.postCompleto);

module.exports = router;