
const tape = require('tape');
const tcase = require('tape-case');

const m = require('../index.js');

const rank_A = [
  {rank:'A', type:'H'},
  {rank:'4', type:'H'},
  {rank:'J', type:'S'},
  {rank:'Q', type:'D'},
  {rank:'9', type:'C'}
];

const pair_of_Q = [
  {rank:'2', type:'H'},
  {rank:'4', type:'H'},
  {rank:'Q', type:'S'},
  {rank:'Q', type:'D'},
  {rank:'9', type:'C'}
];

const pair_of_3 = [
  {rank:'3', type:'H'},
  {rank:'4', type:'H'},
  {rank:'3', type:'S'},
  {rank:'Q', type:'D'},
  {rank:'9', type:'C'}

];

const doublePair_of_9 = [
  {rank:'3', type:'H'},
  {rank:'9', type:'H'},
  {rank:'3', type:'S'},
  {rank:'9', type:'D'},
  {rank:'A', type:'C'}
];

const threeOfAKind_of_J = [
  {rank:'J', type:'H'},
  {rank:'9', type:'D'},
  {rank:'J', type:'S'},
  {rank:'J', type:'C'},
  {rank:'5', type:'C'}
];

const stright_of_9 = [
  {rank:'6', type:'H'},
  {rank:'7', type:'D'},
  {rank:'9', type:'S'},
  {rank:'8', type:'C'},
  {rank:'5', type:'C'}
];

const stright_of_A_top = [
  {rank:'K', type:'H'},
  {rank:'J', type:'D'},
  {rank:'A', type:'S'},
  {rank:'10', type:'C'},
  {rank:'Q', type:'C'}
];

const stright_of_A_bottom = [
  {rank:'3', type:'H'},
  {rank:'4', type:'D'},
  {rank:'2', type:'S'},
  {rank:'5', type:'C'},
  {rank:'A', type:'C'}
];

const flush_of_J = [
  {rank:'3', type:'H'},
  {rank:'4', type:'H'},
  {rank:'2', type:'H'},
  {rank:'5', type:'H'},
  {rank:'J', type:'H'}
];

const flush_of_8 = [
  {rank:'2', type:'D'},
  {rank:'3', type:'D'},
  {rank:'8', type:'D'},
  {rank:'5', type:'D'},
  {rank:'6', type:'D'}
];

const full_of_7 = [
  {rank:'7', type:'D'},
  {rank:'7', type:'S'},
  {rank:'2', type:'D'},
  {rank:'7', type:'H'},
  {rank:'2', type:'C'}
];

const full_of_3 = [
  {rank:'3', type:'D'},
  {rank:'3', type:'S'},
  {rank:'A', type:'D'},
  {rank:'3', type:'H'},
  {rank:'A', type:'C'}
];

const poker_of_A = [
  {rank:'A', type:'H'},
  {rank:'9', type:'D'},
  {rank:'A', type:'S'},
  {rank:'A', type:'C'},
  {rank:'A', type:'D'}
];

const strightFlush_of_9 = [
  {rank:'6', type:'H'},
  {rank:'7', type:'H'},
  {rank:'9', type:'H'},
  {rank:'8', type:'H'},
  {rank:'5', type:'H'}
];

const strightFlush_of_A_bottom = [
  {rank:'3', type:'D'},
  {rank:'4', type:'D'},
  {rank:'2', type:'D'},
  {rank:'5', type:'D'},
  {rank:'A', type:'D'}
];

const royalStrightFlush = [
  {rank:'K', type:'C'},
  {rank:'J', type:'C'},
  {rank:'A', type:'C'},
  {rank:'10', type:'C'},
  {rank:'Q', type:'C'}
];


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
  { description: 'has-highest-card', args: [rank_A], result: { strength: 0, rank: 'A' } },
  { args: [pair_of_Q], result: { strength: 0, rank: 'Q' } },
  { args: [pair_of_3], result: { strength: 0, rank: 'Q' } },
  { args: [doublePair_of_9], result: { strength: 0, rank: 'A' } },
  { args: [threeOfAKind_of_J], result: { strength: 0, rank: 'J' } },
  { args: [stright_of_9], result: { strength: 0, rank: '9' } },
  { args: [stright_of_A_top], result: { strength: 0, rank: 'A' } },
  { args: [stright_of_A_bottom], result: { strength: 0, rank: 'A' } },
  { args: [flush_of_J], result: { strength: 0, rank: 'J' } },
  { args: [flush_of_8], result: { strength: 0, rank: '8' } },
  { args: [full_of_7], result: { strength: 0, rank: '7' } },
  { args: [full_of_3], result: { strength: 0, rank: 'A' } },
  { args: [poker_of_A], result: { strength: 0, rank: 'A' } },
  { args: [strightFlush_of_9], result: { strength: 0, rank: '9' } },
  { args: [strightFlush_of_A_bottom], result: { strength: 0, rank: 'A' } },
  { args: [royalStrightFlush], result: { strength: 0, rank: 'A' } }
], function(cards) {

  return m.hasHighestCard(cards);

});


/*
 * hasPair
 */

tcase([
  { description: 'has-pair', args: [rank_A], result: false },
  { args: [pair_of_Q], result: { strength: 1, rank: 'Q' } },
  { args: [pair_of_3], result: { strength: 1, rank: '3' } },
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
