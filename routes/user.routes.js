const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');
const userController = require('../controllers/user.controller');


router.get('/new',  userController.getNew);

router.post('/new',  userController.postNew);

router.get('/asignarRol',  userController.getRol);

router.post('/asignarRol', userController.postRol);

router.get('/login', userController.getLogin);

router.post('/login', userController.postLogin);

router.get('/logout', userController.logout);

router.get('/main', userController.getMain);

module.exports = router;
