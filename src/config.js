"use strict";

const port      = process.env.PORT || '3001';
const JwtSecret = process.env.JWT_SECRET  || 'very secret secret';

module.exports = {
  port,
  JwtSecret
};