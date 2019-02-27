"use strict";

const port      = process.env.PORT || '3001';
const JwtSecret = process.env.JWT_SECRET  || 'very secret secret';
const velibBaseUrl = process.env.VELIB_BASE_URL || 'https://opendata.paris.fr/api/records/1.0/search/';

module.exports = {
  port,
  JwtSecret,
  velibBaseUrl
};