const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');
const colabController = require('../controllers/colab.controller');

router.get('/main',requiresAuth(), colabController.getColaboradores);

router.post('/OneColaborador', requiresAuth(), colabController.postoneColaborador);


module.exports = router;