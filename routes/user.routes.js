const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

const isAuth = require('../util/isAuth.js');

const isCoordinador = require('../util/isCoordinador');

const isRol = require('../util/isRol.js');

router.get('/new', isAuth,  userController.getNew);

router.post('/new', isAuth,  userController.postNew);

router.get('/asignarRol', isAuth,  userController.getRol);

router.post('/asignarRol', isAuth, userController.postRol);

router.get('/login', userController.getLogin);

router.post('/login', userController.postLogin);

router.get('/logout', isAuth, userController.logout);

router.get('/main', isAuth, userController.getMain);

router.get('/reportes', isAuth, userController.getReportes);

router.get('/crearReporte', isAuth, userController.getCrearReporte);

router.get('/tareas', isAuth,  userController.getTareas);

router.get('/proyectos', isAuth, userController.getProyectos);

router.get('/crearProyecto', isAuth, userController.getCrearProyecto);

router.get('/editarProyecto', isAuth,userController.getEditarProyecto);

router.get('/colaboradores', isAuth, userController.getColaboradores);


module.exports = router;
