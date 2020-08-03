'use strict';

const express = require('express');
const ControllerClass = require('./controller');

const router = express.Router();
const controller = new ControllerClass();

router.get('/Investigation/precinct/', controller.getServices);

module.exports = router;
