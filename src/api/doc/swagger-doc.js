"use strict";

const express  = require('express');
const router   = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;