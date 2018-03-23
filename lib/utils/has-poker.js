const R = require("ramda");

const { pokerOf } = require("./rank");

const hasPoker = R.compose(
  R.not,
  R.equals(void 0),
  pokerOf
);

module.exports = hasPoker;
