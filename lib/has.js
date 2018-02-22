
'use strict';

const straightType = require('./domain/straight-type');
const rank = require('./domain/rank');
const cardsRank = require('./domain/rank-cards');

const groupByRank = require('./utils/group-by-rank');
const sortByRank = require('./utils/sort-by-rank');

const hasHoles = require('./utils/has-holes');
const hasAceStraight = require('./utils/has-ace-straight');
const hasSameType = require('./utils/has-same-type');



function takeRank(cards){

  return cards.map(card => card.rank);

}

function getRank(groupedCards, r){

  let res = [];

  for (let k in groupedCards){
    if(groupedCards.hasOwnProperty(k)){
      if (groupedCards[k] == r){
        res.push(k);
      }
    }
  }

  return res;

}

/*
 * Determine which is the player's best point.
 * Return an object that describes the point (strength, rank, kickers).
 *
 * @example
 * input >
 *  has([{rank:'2', type:'H'}, {rank:'4', type:'H'}, {rank:'Q', type:'S'}, {rank:'Q', type:'D'}, {rank:'9', type:'C'}])
 *
 * < output:
 * { strength: 1, rank: 'Q', kickers: ['9', '4', '2'] }
 */
exports = module.exports = function has(cards) {

  const sortedCards = sortByRank(cards);

  if (hasSameType(cards)){

    // possible point:
    // royal-straight-flush, straight-flush, flush

    if (hasAceStraight(sortedCards, straightType.high)){
      return { strength: rank.get('royal-straight-flush'), rank: 'A', kickers: [] };
    }

    if (hasAceStraight(sortedCards, straightType.low) || !hasHoles(sortedCards)){
      let straightFlushRank = sortedCards[0].rank == 'A' ? '5' : sortedCards[0].rank;
      return { strength: rank.get('straight-flush'), rank: straightFlushRank, kickers: [] };
    }

    return { strength: rank.get('flush'), rank: sortedCards.shift().rank, kickers: takeRank(sortedCards) };

  }

  // possible point:
  // poker, full-house, stright, three-of-a-kind, double-pair, pair, highest-card

  const groupedCards = groupByRank(cards);

  switch (Object.keys(groupedCards).length){

    case 2:
      // poker
      // full-house

      let pokerRank = getRank(groupedCards, 4)[0];

      if (typeof pokerRank != 'undefined'){
        return { strength: rank.get('poker'), rank: pokerRank, kickers: takeRank(sortedCards.filter(card => card.rank != pokerRank)) };
      }

      // only full-house

      let fullhouseRank = getRank(groupedCards, 3)[0];
      let fullhouseKickers = [ takeRank(sortedCards.filter(card => card.rank != fullhouseRank))[0] ];

      return { strength: rank.get('full-house'), rank: fullhouseRank, kickers: fullhouseKickers };

    case 3:
      // three-of-a-kind
      // double-pair

      let threeofakindRank = getRank(groupedCards, 3)[0];

      if (typeof threeofakindRank != 'undefined'){
        return { strength: rank.get('three-of-a-kind'), rank: threeofakindRank, kickers: takeRank(sortedCards.filter(card => card.rank != threeofakindRank)) };
      }

      // only double-pair

      let doublePairResult = { strength: rank.get('double-pair') };

      let doublePair = getRank(groupedCards, 2);
      let firstPairRank = doublePair[0];
      let secondPairRank = doublePair[1];
      let kicker = takeRank(cards.filter(card => doublePair.indexOf(card.rank) < 0));

      if (cardsRank.indexOf(firstPairRank) > cardsRank.indexOf(secondPairRank)){
        doublePairResult.rank = firstPairRank;
        doublePairResult.kickers = [secondPairRank].concat(kicker);
      }
      else {
        doublePairResult.rank = secondPairRank;
        doublePairResult.kickers = [firstPairRank].concat(kicker);
      }

      return doublePairResult

    case 4:
      // only pair
      let pairRank = getRank(groupedCards, 2)[0];
      return { strength: rank.get('pair'), rank: pairRank, kickers: takeRank(sortedCards.filter(card => card.rank != pairRank)) }

    case 5:
      // straight
      // highest-card

      if (hasAceStraight(sortedCards, straightType.low)){
        return { strength: rank.get('straight'), rank: '5', kickers: [] };
      }

      if (hasAceStraight(sortedCards, straightType.high) || !hasHoles(sortedCards)){
        return { strength: rank.get('straight'), rank: sortedCards[0].rank, kickers: [] };
      }

  }

  return { strength: rank.get('highest-card'), rank: sortedCards.shift().rank, kickers: takeRank(sortedCards) };

};
