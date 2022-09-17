const express = require('express');
const router = express.Router();

const colabController = require('../controllers/colab.controller');

const isAuth = require('../util/isAuth.js');

const isCoordinador = require('../util/isCoordinador');

const isRol = require('../util/isRol.js');


router.get('/colaboradores', isAuth, colabController.getColaboradores);