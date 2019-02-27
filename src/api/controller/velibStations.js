const VelibService = require('../../services/VelibService');
const SpatialOps = require('../../lib/spatialOperations');

let velibService = new VelibService();

let getOperationalStations = async (req, res) => {
  let allStations = await velibService.getAllStations();
  if (allStations.status === 200) {
    let availableBikesForRent = 0;
    let operationalStations = 0;
    allStations.data.network.stations.forEach((station) => {
      if (station.extra.status === 'Operative') {
        availableBikesForRent += station.free_bikes;
        operationalStations += 1
      }
    });
    return res.status(200).json({operational_stations: operationalStations, total_available_bikes: availableBikesForRent});
  }
};

let getNearestOperativeBikeStation = async (req, res) => {
  console.log(req.query);
  if (!Object.prototype.hasOwnProperty.call(req.query, 'lat')) return res.status(400).json({
    error: 'Bad Request',
    message: 'The request parameters must contain a the parameter lat'
  });

  if (!Object.prototype.hasOwnProperty.call(req.query, 'lon')) return res.status(400).json({
    error: 'Bad Request',
    message: 'The request parameters must contain a the parameter lon'
  });

  let allStations = await velibService.getAllStations();
  let userLatitude = req.query.lat;
  let userLongitude = req.query.lon;

  if (allStations.status === 200) {
    let closestStation = {};
    let closestDistance = Number.MAX_SAFE_INTEGER;
    allStations.data.network.stations.forEach((station) => {
      if (station.extra.status === 'Operative' && station.free_bikes > 0) {
        let distance = SpatialOps.getDistanceBetweenCoordinates(userLatitude, userLongitude, station.latitude, station.longitude);
        if (distance < closestDistance) {
          closestStation = station;
          closestDistance = distance
        }
      }
    });
    return res.status(200).json({closest_station: closestStation, distance_to_station: { distance: closestDistance, units: 'meters'}});
  }
};

module.exports = {
  getOperationalStations,
  getNearestOperativeBikeStation
};