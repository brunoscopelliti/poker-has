
'use strict';

const rank = require('./rank');
const cardsRank = require('./rank-cards');

/*
 * Determine what is the player's stronger card.
 * It does not mean that the player hasn't a stronger point than highest-card
 *
 * @example
 * input >
 *  hasPair([{rank:'2', type:'H'}, {rank:'4', type:'H'}, {rank:'Q', type:'S'}, {rank:'Q', type:'D'}, {rank:'9', type:'C'}])
 *
 * < output:
 * { strength: 0, rank: 'Q' }
 */
exports = module.exports = function hasHighestCard(cards) {

  let bestCard = cards[0];

  cards.forEach(function(card){
    let level = cardsRank.indexOf(card.rank);
    if (level > cardsRank.indexOf(bestCard.rank)){
      bestCard = card;
    }
  });

  return { strength: rank.get('highest-card'), rank: bestCard.rank };;

};
