
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
 *  [
 *    {rank:'A', type:'H'},
 *    {rank:'5', type:'H'},
 *    {rank:'4', type:'S'},
 *    {rank:'3', type:'D'},
 *    {rank:'2', type:'C'}
 *  ]
 *
 * < output:
 * true
 */
exports = module.exports = function hasAceStraight_(sortedCards, type){
  let refer = type == straightType.low ? straightLow : straightHigh;
  for (let i=0; i<sortedCards.length; i++){
    if (sortedCards[i].rank != refer[i]){
      return false;
    }
  }
  return true;
}
