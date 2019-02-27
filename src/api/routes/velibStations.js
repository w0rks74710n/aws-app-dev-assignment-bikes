const express  = require('express');
const router   = express.Router();
const VelibStationsController = require('../controller/velibStations');

router.get('/', VelibStationsController.getOperationalStations);
router.get('/nearby', VelibStationsController.getNearestOperativeBikeStation);

module.exports = router;
