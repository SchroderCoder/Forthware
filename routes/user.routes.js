const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

const isAuth = require('../util/isAuth.js');


router.get('/new', isAuth,  userController.getNew);

router.post('/new', isAuth,  userController.postNew);

router.get('/asignarRol', isAuth,  userController.getRol);

router.post('/asignarRol', isAuth, userController.postRol);

router.get('/login', userController.getLogin);

router.post('/login', userController.postLogin);

router.get('/logout', isAuth, userController.logout);

router.get('/main', isAuth, userController.getMain);

module.exports = router;
