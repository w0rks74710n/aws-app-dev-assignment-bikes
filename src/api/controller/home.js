"use strict";

let showAPIHome = (req, res) => {
  return res.status(200).json({message: 'This is the root path to access the bike-sharing API'});
};

module.exports = {
  showAPIHome
};
