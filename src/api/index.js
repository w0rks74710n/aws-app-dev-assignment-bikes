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
  res.send('<html><body><h1>Welcome to the restored Velib Service API</h1><h4>Please visit the <a href="http://ec2-52-59-211-201.eu-central-1.compute.amazonaws.com/api-doc/">documentation</a> for further information</h4></body></html>');
});

module.exports = router;