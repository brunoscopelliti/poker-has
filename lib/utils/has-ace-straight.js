
'use strict';

const straightType = require('../domain/straight-type');

const straightLow = ['A', '5', '4', '3', '2'];
const straightHigh = ['A', 'K', 'Q', 'J', '10'];

/*
 * Determine if the sequence is continuous or has holes.
 * It handles correctly the ace.
 *
 * @example
 *  input >
 *  ['A', '5', '4', '3', '2']
 *
 * < output:
 * true
 */
exports = module.exports = function hasAceStraight_(ranks, type){
  let refer = type == straightType.low ? straightLow : straightHigh;
  for (let i=0; i<=ranks.length; i++){
    if (ranks[i] != refer[i]){
      return false;
    }
  }
  return true;
}
