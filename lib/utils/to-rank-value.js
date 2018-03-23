const R = require("ramda");

const ranks = require("../domain/card-rank");

const toRankValue = R.indexOf(R.__, ranks);

module.exports = toRankValue;
