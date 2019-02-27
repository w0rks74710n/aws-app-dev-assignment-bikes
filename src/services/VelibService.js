const HttpService = require('./HttpService');
const config = require('../config');

class VelibService {
    static velibService = new HttpService(velibBaseUrl, 'application/json', '', '', '');

  async getAllStations() {
    let params = {dataset: 'velib-disponibilite-en-temps-reel', rows: 1, start: 1};
    let response = await velibService.get(config.velibBaseUrl, params);
    params.rows = response.data.nhits;
    response = await velibService.get(config.velibBaseUrl, params);
    console.log(response)
  }

}

export default VelibService