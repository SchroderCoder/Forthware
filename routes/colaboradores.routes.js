const express = require('express');
const router = express.Router();

const colabController = require('../controllers/colab.controller');

const isAuth = require('../util/isAuth.js');

router.get('/main', isAuth, colabController.getColaboradores);


module.exports = router;