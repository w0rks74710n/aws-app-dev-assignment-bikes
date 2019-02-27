const express  = require('express');
const router   = express.Router();
const VelibStationsController = require('../controller/velibStations');

router.get('/', VelibStationsController.getOperationalStations);

module.exports = router;
