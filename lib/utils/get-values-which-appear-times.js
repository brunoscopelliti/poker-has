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
      if (hasOwn.call(groupedCards, k)) {
        if (groupedCards[k] === time) {
          values.push(k);
        }
      }
    }
    return values;
  };

module.exports = getValuesWhichAppearTimes;
