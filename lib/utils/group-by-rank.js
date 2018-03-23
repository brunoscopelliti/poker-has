const R = require("ramda");

const groupByRank = R.groupBy(R.prop("rank"));

module.exports = groupByRank;
