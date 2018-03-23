const R = require("ramda");

const groupByType = R.groupBy(R.prop("type"));

const hasFlush = R.compose(
  R.equals(1),
  R.length,
  R.keys,
  groupByType
);

module.exports = hasFlush;
