const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');
const userController = require('../controllers/user.controller');


router.get('/new',  requiresAuth(),userController.getNew);

router.post('/new', requiresAuth(), userController.postNew);

router.get('/asignarRol',  requiresAuth(), userController.getRol);

router.post('/asignarRol', requiresAuth(), userController.postRol);

router.get('/main',requiresAuth(), userController.getMain);

module.exports = router;
