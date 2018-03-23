const R = require("ramda");

const toRankValue = require("./to-rank-value");

const sortByRank = R.sortBy(R.compose(toRankValue, R.prop("rank")));

module.exports = sortByRank;
