const express    = require('express');
const bodyParser = require('body-parser');
const helmet     = require('helmet');
const api     = require('./src/api/index');
const config     = require('./src/config');
const app = express();
const VelibService = require('./src/services/VelibService');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(api);
app.listen(config.port, async function() {
  console.log('Listening on port ' + config.port);
});
