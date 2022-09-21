const express = require('express');
const router = express.Router();

const reportesController = require('../controllers/reportes.controller');

const isAuth = require('../util/isAuth.js');

const reporte_lock = require('../util/Reporte_lock');

router.get('/main', isAuth, reporte_lock, reportesController.getReportes);

router.get('/crearReporte', isAuth, reporte_lock, reportesController.getCrearReporte);


module.exports = router;