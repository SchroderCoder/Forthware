const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/login', userController.getLogin);

//router.post('/login', userController.postLogin);

//router.get('/logout', userController.logout);

router.get('/main', userController.getMain);

router.get('/reportes', userController.getReportes);

router.get('/tareas', userController.getTareas);

router.get('/proyectos', userController.getProyectos);

router.get('/colaboradores', userController.getColaboradores);


module.exports = router;
