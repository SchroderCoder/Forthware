const express = require('express');
const router = express.Router();

const reportesController = require('../controllers/reportes.controller');

const isAuth = require('../util/isAuth.js');

const isCoordinador = require('../util/isCoordinador');

const isRol = require('../util/isRol.js');

router.get('/main', isAuth, reportesController.getReportes);

router.get('/crearReporte', isAuth, reportesController.getCrearReporte);


module.exports = router;