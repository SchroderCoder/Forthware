const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

const isAuth = require('../util/isAuth.js');

const isCoordinador = require('../util/isCoordinador');

const isRol = require('../util/isRol.js');
