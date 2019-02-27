"use strict";

const express    = require('express');
const bodyParser = require('body-parser');
const helmet     = require('helmet');
const api     = require('./src/api/index');
const config     = require('./src/config');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(api);
app.listen(config.port, function() {
  console.log('Listening on port ' + config.port);
});
