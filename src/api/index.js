"use strict";

const express  = require('express');
const router   = express.Router();
const bodyParser = require('body-parser');
const helmet     = require('helmet');
const routes     = require('./routes');
const apiDoc     = require('./doc/swagger-doc');

router.use(helmet());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use('/api-doc', apiDoc);
router.use('/api/v1', routes);
router.use('/', function(req, res) {
  res.send('<html><body><h1>Welcome to Velib restored service API</h1></body></html>');
});

module.exports = router;