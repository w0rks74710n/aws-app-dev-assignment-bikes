"use strict";

const port      = process.env.PORT || '3000';
const JwtSecret = process.env.JWT_SECRET  || 'very secret secret';
const velibBaseUrl = process.env.VELIB_BASE_URL || 'https://api.citybik.es/v2/networks/velib';

module.exports = {
  port,
  JwtSecret,
  velibBaseUrl
};