const R = require("ramda");

const groupByRank = require("./group-by-rank");

/**
 * Return a `function`
 * that permits to select the cards' rank
 * which are repeated in the given `quantity`
 * @name getRanksWithQuantity
 * @param {number} quantity
 * @return {function}
 */
const getRanksWithQuantity =
  (quantity) => R.compose(
    R.keys,
    R.filter(
      R.compose(R.equals(quantity), R.length)
    ),
    groupByRank
  );

/**
 * @name pokerOf
 * @param {{Card[]}} cards
 * @return {string|void} Poker's rank
 */
exports.pokerOf = R.compose(R.head, getRanksWithQuantity(4));

const rankOfTheFirst = R.compose(R.prop("rank"), R.head);
const rankOfTheLast = R.compose(R.prop("rank"), R.last);

/**
 * @name straightOf
 * @param {{Card[]}} cards
 * @return {string|void} Straight's rank
 */
exports.straightOf = R.ifElse(
  R.allPass([
    R.compose(R.equals("2"), rankOfTheFirst),
    R.compose(R.equals("A"), rankOfTheLast),
  ]),
  R.always("5"),
  rankOfTheLast
);

/**
 * @name threeOfAKindOf
 * @param {{Card[]}} cards
 * @return {string|void} Tree of a kind's rank
 */
exports.threeOfAKindOf = R.compose(R.head, getRanksWithQuantity(3));

/**
 * @name doublePairOf
 * @param {{Card[]}} cards
 * @return {string[]} Straight's rank
 */
exports.doublePairOf = R.compose(R.reverse, getRanksWithQuantity(2));

/**
 * @name pairOf
 * @param {{Card[]}} cards
 * @return {string|void} Pair's rank
 */
exports.pairOf = R.compose(R.head, getRanksWithQuantity(2));

/**
 * @name kickers
 * @param {{Card[]}} cards
 * @return {string[]} Cards which don't partecipate in any other combination
 */
exports.kickers = R.compose(R.reverse, getRanksWithQuantity(1));
