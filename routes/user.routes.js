const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

const isAuth = require('../util/isAuth.js');
const isCoordinador = require('../util/isCoordinador');

const isRol = require('../util/isRol.js');

router.get('/new', isAuth, isCoordinador, userController.getNew);

router.post('/new', isAuth, isCoordinador, userController.postNew);

router.get('/login', userController.getLogin);

router.post('/login', userController.postLogin);

router.get('/logout', isAuth, userController.logout);

router.get('/main', isAuth, userController.getMain);

router.get('/reportes', isAuth, userController.getReportes);

router.get('/crearReporte', isAuth, isCoordinador, userController.getCrearReporte);

router.get('/tareas', isAuth,  userController.getTareas);

router.get('/proyectos', isAuth, userController.getProyectos);

router.get('/crearProyecto', isAuth, isRol, userController.getCrearProyecto);

router.get('/editarProyecto', isAuth, isRol, userController.getEditarProyecto);

router.get('/colaboradores', isAuth, userController.getColaboradores);


module.exports = router;
