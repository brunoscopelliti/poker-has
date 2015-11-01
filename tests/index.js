
const tape = require('tape');
const tcase = require('tape-case');

const m = require('../index.js');

const rank_A = Object.freeze([
  {rank:'A', type:'H'},
  {rank:'4', type:'H'},
  {rank:'J', type:'S'},
  {rank:'Q', type:'D'},
  {rank:'9', type:'C'}
]);

const pair_of_Q = Object.freeze([
  {rank:'2', type:'H'},
  {rank:'4', type:'H'},
  {rank:'Q', type:'S'},
  {rank:'Q', type:'D'},
  {rank:'9', type:'C'}
]);

const pair_of_3 = Object.freeze([
  {rank:'3', type:'H'},
  {rank:'4', type:'H'},
  {rank:'3', type:'S'},
  {rank:'Q', type:'D'},
  {rank:'9', type:'C'}
]);

const doublePair_of_9 = Object.freeze([
  {rank:'3', type:'H'},
  {rank:'9', type:'H'},
  {rank:'3', type:'S'},
  {rank:'9', type:'D'},
  {rank:'A', type:'C'}
]);

const threeOfAKind_of_J = Object.freeze([
  {rank:'J', type:'H'},
  {rank:'9', type:'D'},
  {rank:'J', type:'S'},
  {rank:'J', type:'C'},
  {rank:'5', type:'C'}
]);

const stright_of_9 = Object.freeze([
  {rank:'6', type:'H'},
  {rank:'7', type:'D'},
  {rank:'9', type:'S'},
  {rank:'8', type:'C'},
  {rank:'5', type:'C'}
]);

const stright_of_A_top = Object.freeze([
  {rank:'K', type:'H'},
  {rank:'J', type:'D'},
  {rank:'A', type:'S'},
  {rank:'10', type:'C'},
  {rank:'Q', type:'C'}
]);

const stright_of_A_bottom = Object.freeze([
  {rank:'3', type:'H'},
  {rank:'4', type:'D'},
  {rank:'2', type:'S'},
  {rank:'5', type:'C'},
  {rank:'A', type:'C'}
]);

const flush_of_J = Object.freeze([
  {rank:'3', type:'H'},
  {rank:'4', type:'H'},
  {rank:'2', type:'H'},
  {rank:'5', type:'H'},
  {rank:'J', type:'H'}
]);

const flush_of_8 = Object.freeze([
  {rank:'2', type:'D'},
  {rank:'3', type:'D'},
  {rank:'8', type:'D'},
  {rank:'5', type:'D'},
  {rank:'6', type:'D'}
]);

const full_of_7 = Object.freeze([
  {rank:'7', type:'D'},
  {rank:'7', type:'S'},
  {rank:'2', type:'D'},
  {rank:'7', type:'H'},
  {rank:'2', type:'C'}
]);

const full_of_3 = Object.freeze([
  {rank:'3', type:'D'},
  {rank:'3', type:'S'},
  {rank:'A', type:'D'},
  {rank:'3', type:'H'},
  {rank:'A', type:'C'}
]);

const poker_of_A = Object.freeze([
  {rank:'A', type:'H'},
  {rank:'9', type:'D'},
  {rank:'A', type:'S'},
  {rank:'A', type:'C'},
  {rank:'A', type:'D'}
]);

const strightFlush_of_9 = Object.freeze([
  {rank:'6', type:'H'},
  {rank:'7', type:'H'},
  {rank:'9', type:'H'},
  {rank:'8', type:'H'},
  {rank:'5', type:'H'}
]);

const strightFlush_of_A_bottom = Object.freeze([
  {rank:'3', type:'D'},
  {rank:'4', type:'D'},
  {rank:'2', type:'D'},
  {rank:'5', type:'D'},
  {rank:'A', type:'D'}
]);

const royalStrightFlush = Object.freeze([
  {rank:'K', type:'C'},
  {rank:'J', type:'C'},
  {rank:'A', type:'C'},
  {rank:'10', type:'C'},
  {rank:'Q', type:'C'}
]);


tape('poker-has:', function(t) { t.end(); });

tape('check interface', function(t) {

  t.equal(typeof m.hasHighestCard, 'function', 'has-highest-card is a function');
  t.equal(typeof m.hasPair, 'function', 'has-pair is a function');
  t.equal(typeof m.hasDoublePair, 'function', 'has-double-pair is a function');
  t.equal(typeof m.hasThreeOfAKind, 'function', 'has-three-of-a-kind is a function');
  t.equal(typeof m.hasStraight, 'function', 'has-straight is a function');
  t.equal(typeof m.hasFlush, 'function', 'has-flush is a function');
  t.equal(typeof m.hasFullHouse, 'function', 'has-full-house is a function');
  t.equal(typeof m.hasPoker, 'function', 'has-poker is a function');
  t.equal(typeof m.hasStraightFlush, 'function', 'has-straight-flush is a function');
  t.equal(typeof m.hasRoyalStraightFlush, 'function', 'has-royal-straight-flush is a function');

  t.end();

});


/*
 * hasHighestCard
 */

tcase([
  { description: 'has-highest-card', args: [rank_A], result: { strength: 0, rank: 'A', kickers: ['Q', 'J', '9', '4'] } }
], function(cards) {

  return m.hasHighestCard(cards);

});


/*
 * hasPair
 */

tcase([
  { description: 'has-pair', args: [rank_A], result: false },
  { args: [pair_of_Q], result: { strength: 1, rank: 'Q', kickers: ['9', '4', '2'] } },
  { args: [pair_of_3], result: { strength: 1, rank: '3', kickers: ['Q', '9', '4'] } },
  { args: [doublePair_of_9], result: false },
  { args: [threeOfAKind_of_J], result: false },
  { args: [stright_of_9], result: false },
  { args: [stright_of_A_top], result: false },
  { args: [stright_of_A_bottom], result: false },
  { args: [flush_of_J], result: false },
  { args: [flush_of_8], result: false },
  { args: [full_of_7], result: false },
  { args: [full_of_3], result: false },
  { args: [poker_of_A], result: false },
  { args: [strightFlush_of_9], result: false },
  { args: [strightFlush_of_A_bottom], result: false },
  { args: [royalStrightFlush], result: false }
], function(cards) {

  return m.hasPair(cards);

});


/*
 * hasDoublePair
 */

tcase([
  { description: 'has-double-pair', args: [rank_A], result: false },
  { args: [pair_of_Q], result: false },
  { args: [pair_of_3], result: false },
  { args: [doublePair_of_9], result: { strength: 2, rank: '9', kickers: ['3', 'A'] } },
  { args: [threeOfAKind_of_J], result: false },
  { args: [stright_of_9], result: false },
  { args: [stright_of_A_top], result: false },
  { args: [stright_of_A_bottom], result: false },
  { args: [flush_of_J], result: false },
  { args: [flush_of_8], result: false },
  { args: [full_of_7], result: false },
  { args: [full_of_3], result: false },
  { args: [poker_of_A], result: false },
  { args: [strightFlush_of_9], result: false },
  { args: [strightFlush_of_A_bottom], result: false },
  { args: [royalStrightFlush], result: false }
], function(cards) {

  return m.hasDoublePair(cards);

});


/*
 * hasThreeOfAKind
 */

tcase([
  { description: 'has-three-of-a-kind', args: [rank_A], result: false },
  { args: [pair_of_Q], result: false },
  { args: [pair_of_3], result: false },
  { args: [doublePair_of_9], result: false },
  { args: [threeOfAKind_of_J], result: { strength: 4, rank: 'J', kickers: ['9', '5'] } },
  { args: [stright_of_9], result: false },
  { args: [stright_of_A_top], result: false },
  { args: [stright_of_A_bottom], result: false },
  { args: [flush_of_J], result: false },
  { args: [flush_of_8], result: false },
  { args: [full_of_7], result: false },
  { args: [full_of_3], result: false },
  { args: [poker_of_A], result: false },
  { args: [strightFlush_of_9], result: false },
  { args: [strightFlush_of_A_bottom], result: false },
  { args: [royalStrightFlush], result: false }
], function(cards) {

  return m.hasThreeOfAKind(cards);

});


/*
 * hasStraight
 */

tcase([
  { description: 'has-straight', args: [rank_A], result: false },
  { args: [pair_of_Q], result: false },
  { args: [pair_of_3], result: false },
  { args: [doublePair_of_9], result: false },
  { args: [threeOfAKind_of_J], result: false },
  { args: [stright_of_9], result: { strength: 8, rank: '9', kickers: [] } },
  { args: [stright_of_A_top], result: { strength: 8, rank: 'A', kickers: [] } },
  { args: [stright_of_A_bottom], result: { strength: 8, rank: '5', kickers: [] } },
  { args: [flush_of_J], result: false },
  { args: [flush_of_8], result: false },
  { args: [full_of_7], result: false },
  { args: [full_of_3], result: false },
  { args: [poker_of_A], result: false },
  { args: [strightFlush_of_9], result: false },
  { args: [strightFlush_of_A_bottom], result: false },
  { args: [royalStrightFlush], result: false }
], function(cards) {

  return m.hasStraight(cards);

});


/*
 * hasFlush
 */

tcase([
  { description: 'has-flush', args: [rank_A], result: false },
  { args: [pair_of_Q], result: false },
  { args: [pair_of_3], result: false },
  { args: [doublePair_of_9], result: false },
  { args: [threeOfAKind_of_J], result: false },
  { args: [stright_of_9], result: false },
  { args: [stright_of_A_top], result: false },
  { args: [stright_of_A_bottom], result: false },
  { args: [flush_of_J], result: { strength: 16, rank: 'J', kickers: ['5', '4', '3', '2'] } },
  { args: [flush_of_8], result: { strength: 16, rank: '8', kickers: ['6', '5', '3', '2'] } },
  { args: [full_of_7], result: false },
  { args: [full_of_3], result: false },
  { args: [poker_of_A], result: false },
  { args: [strightFlush_of_9], result: false },
  { args: [strightFlush_of_A_bottom], result: false },
  { args: [royalStrightFlush], result: false }
], function(cards) {

  return m.hasFlush(cards);

});


/*
 * hasFullHouse
 */

tcase([
  { description: 'has-full-house', args: [rank_A], result: false },
  { args: [pair_of_Q], result: false },
  { args: [pair_of_3], result: false },
  { args: [doublePair_of_9], result: false },
  { args: [threeOfAKind_of_J], result: false },
  { args: [stright_of_9], result: false },
  { args: [stright_of_A_top], result: false },
  { args: [stright_of_A_bottom], result: false },
  { args: [flush_of_J], result: false },
  { args: [flush_of_8], result: false },
  { args: [full_of_7], result: { strength: 32, rank: '7', kickers: ['2'] } },
  { args: [full_of_3], result: { strength: 32, rank: '3', kickers: ['A'] } },
  { args: [poker_of_A], result: false },
  { args: [strightFlush_of_9], result: false },
  { args: [strightFlush_of_A_bottom], result: false },
  { args: [royalStrightFlush], result: false }
], function(cards) {

  return m.hasFullHouse(cards);

});


/*
 * hasPoker
 */

tcase([
  { description: 'has-poker', args: [rank_A], result: false },
  { args: [pair_of_Q], result: false },
  { args: [pair_of_3], result: false },
  { args: [doublePair_of_9], result: false },
  { args: [threeOfAKind_of_J], result: false },
  { args: [stright_of_9], result: false },
  { args: [stright_of_A_top], result: false },
  { args: [stright_of_A_bottom], result: false },
  { args: [flush_of_J], result: false },
  { args: [flush_of_8], result: false },
  { args: [full_of_7], result: false },
  { args: [full_of_3], result: false },
  { args: [poker_of_A], result: { strength: 64, rank: 'A', kickers: ['9'] } },
  { args: [strightFlush_of_9], result: false },
  { args: [strightFlush_of_A_bottom], result: false },
  { args: [royalStrightFlush], result: false }
], function(cards) {

  return m.hasPoker(cards);

});
