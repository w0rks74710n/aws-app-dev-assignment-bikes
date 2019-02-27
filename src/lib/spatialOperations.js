let getDistanceBetweenCoordinates = (lat1, lon1, lat2, lon2) => {
  // Use great-circle distance -> https://en.wikipedia.org/wiki/Great-circle_distance
  let R = 6371000; // Earth radius in metres
  var lat1R = _convertDegreesToRadians(lat1);
  var lat2R = _convertDegreesToRadians(lat2);
  var deltaLat = _convertDegreesToRadians(lat2-lat1);
  var deltaLon = _convertDegreesToRadians(lon2-lon1);

  var a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) + Math.cos(lat1R) * Math.cos(lat2R) * Math.sin(deltaLon/2) * Math.sin(deltaLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

let _convertDegreesToRadians = (degrees) => {
  return degrees * (Math.PI/180);
};

module.exports = {
  getDistanceBetweenCoordinates
};