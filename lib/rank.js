
const rank = new Map();

rank.set('highest-card', 0);
rank.set('pair', 1);
rank.set('double-pair', 2);
rank.set('three-of-a-kind', 4);
rank.set('straight', 8);
rank.set('flush', 16);
rank.set('full-house', 32);
rank.set('poker', 64);
rank.set('straight-flush', 128);
rank.set('royal-straight-flush', 256);

exports = module.exports = rank;
