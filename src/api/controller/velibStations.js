const VelibService = require('../../services/VelibService');

let velibService = new VelibService();

let getOperationalStations = async (req, res) => {
  let allStations = await velibService.getAllStations();
  if (allStations.status === 200) {
    return res.status(200).json(allStations.data.network.stations);
  }
};

module.exports = {
  getOperationalStations
};