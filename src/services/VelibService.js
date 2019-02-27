const HttpService = require('./HttpService');
const config = require('../config');

class VelibService {
  constructor() {
    this._velibService = new HttpService(config.velibBaseUrl, 'application/json', '', '', '');
  }

  async getAllStations() {
    let response = await this._velibService.get(config.velibBaseUrl, {});
    return response.status === 200 ? response : {error: 'Unable to reach service', status: response.status};
  }
}

module.exports = VelibService;