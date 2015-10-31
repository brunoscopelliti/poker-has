
'use strict';

const rank = require('./rank');
const cardsRank = require('./rank-cards');

/*
 * Determine what is the player's stronger card.
 * It does not mean that the player hasn't a stronger point than highest-card
 *
 * @example
 * input >
 *  hasPair([{rank:'2', type:'H'}, {rank:'4', type:'H'}, {rank:'Q', type:'S'}, {rank:'6', type:'D'}, {rank:'9', type:'C'}])
 *
 * < output:
 * { strength: 0, rank: 'Q', kickers: ['9', '6', '4', '2'] }
 */
exports = module.exports = function hasHighestCard(cards) {

  let sortedCards = cards.sort((a,b) => cardsRank.indexOf(b.rank)-cardsRank.indexOf(a.rank));
  let bestCard = sortedCards[0];
  let otherCards = sortedCards.slice(1, sortedCards.length);

  return { strength: rank.get('highest-card'), rank: bestCard.rank, kickers: otherCards.map(card => card.rank) };

};
