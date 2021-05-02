"use strict";

const hasOwn = {}.hasOwnProperty;

/**
 * @name getValuesWhichAppearTimes
 * @param {Object} groupedCards
 * @param {Number} time
 * @return {Array}
 */
const getValuesWhichAppearTimes =
  (groupedCards, time) => {
    const values = [];
    for (const k in groupedCards) {
      /* istanbul ignore else */
      if (hasOwn.call(groupedCards, k)) {
        /* istanbul ignore else */
        if (groupedCards[k] === time) {
          values.push(k);
        }
      }
    }
    return values;
  };

module.exports = getValuesWhichAppearTimes;
