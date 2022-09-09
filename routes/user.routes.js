const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/new', userController.getNew);

router.post('/new', userController.postNew);

router.get('/login', userController.getLogin);

router.post('/login', userController.postLogin);

router.get('/logout', userController.logout);

router.get('/main', userController.getMain);

router.get('/reportes', userController.getReportes);

router.get('/crearReporte', userController.getCrearReporte);

router.get('/tareas', userController.getTareas);

router.get('/proyectos', userController.getProyectos);

router.get('/crearProyecto', userController.getCrearProyecto);

router.get('/editarProyecto', userController.getEditarProyecto);

router.get('/colaboradores', userController.getColaboradores);


module.exports = router;
