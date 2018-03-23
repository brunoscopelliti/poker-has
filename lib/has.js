const R = require("ramda");

const sortByRank = require("./utils/sort-by-rank");

const hasFlush = require("./utils/has-flush");

const { COMBINATIONS, FLUSHED_COMBINATIONS } = require("./combinations");

const getFindHandler =
  (cards) => {
    return (combination) => combination.cond(cards);
  };

const searchIn = (combinations) => R.compose(R.find(R.__, combinations), getFindHandler);

const findInFlushedCombinations = searchIn(FLUSHED_COMBINATIONS);

const findInCombinations = searchIn(COMBINATIONS);

const findCombination = R.ifElse(hasFlush, findInFlushedCombinations, findInCombinations);

const getCombinationStrengthHandler = R.compose(R.prop("combinationStrength"), findCombination);

const getCombinationStrength = R.curry(
  (combinationStrengthHandler, cards) => {
    return combinationStrengthHandler(cards);
  }
);

/**
 * has :: Card[] -> CombinationStrength
 * Given five cards,
 * determine the stronger Texas Hold'em combination
 * they can form.
 * @name has
 * @param {Card[]} cardCombination
 * @return {CombinationStrength}
 */
const has = R.compose(R.chain(getCombinationStrength, getCombinationStrengthHandler), sortByRank);

module.exports = has;

/**
 * @typedef {Object} Card
 * @property {string} type
 * @property {string} rank
 */

/**
 * @typedef {Object} Combination
 * @property {function} combinationStrength
 * @property {function} cond
 */

/**
 * @typedef {Object} CombinationStrength
 * @property {number} strength
 * @property {string} rank
 * @property {string[]} kickers
 */
