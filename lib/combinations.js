const R = require("ramda");

const hasStraightTopAce = require("./utils/has-straight-top-ace");
const hasStraightBottomAce = require("./utils/has-straight-bottom-ace");
const hasPoker = require("./utils/has-poker");
const hasStraight = require("./utils/has-straight");
const hasThreeOfAKind = require("./utils/has-three-of-a-kind");
const hasDoublePair = require("./utils/has-double-pair");
const hasPair = require("./utils/has-pair");

const royalFlush = require("./combinations/royal-flush");
const straightFlush = require("./combinations/straight-flush");
const poker = require("./combinations/poker");
const full = require("./combinations/full");
const flush = require("./combinations/flush");
const straight = require("./combinations/straight");
const threeOfAKind = require("./combinations/three-of-a-kind");
const doublePair = require("./combinations/double-pair");
const pair = require("./combinations/pair");
const cardHigh = require("./combinations/card-high");

const FLUSHED_COMBINATIONS = [{
  combinationStrength: royalFlush,
  cond: hasStraightTopAce,
}, {
  combinationStrength: straightFlush,
  cond: R.anyPass([hasStraight, hasStraightBottomAce]),
}, {
  combinationStrength: flush,
  cond: R.always(true),
}];

const COMBINATIONS = [{
  combinationStrength: poker,
  cond: hasPoker,
}, {
  combinationStrength: full,
  cond: R.allPass([hasThreeOfAKind, hasPair]),
}, {
  combinationStrength: straight,
  cond: R.anyPass([hasStraight, hasStraightBottomAce]),
}, {
  combinationStrength: threeOfAKind,
  cond: hasThreeOfAKind,
}, {
  combinationStrength: doublePair,
  cond: hasDoublePair,
}, {
  combinationStrength: pair,
  cond: hasPair,
}, {
  combinationStrength: cardHigh,
  cond: R.always(true),
}];

exports.FLUSHED_COMBINATIONS = FLUSHED_COMBINATIONS;
exports.COMBINATIONS = COMBINATIONS;
