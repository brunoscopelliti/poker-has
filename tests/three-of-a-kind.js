const has = require("../index.js");
const card = require("./utils/card");

const tap = require("tap");
const test = tap.test;

test("Three of a kind of J", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("J", "H"),
    card("9", "D"),
    card("J", "S"),
    card("J", "C"),
    card("5", "C"),
  ]);

  t.strictDeepEqual(has(cards), { name: "Three of a kind", strength: 3, rank: "J", kickers: ["9", "5"] });
});

test("Three of a kind of 10", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("10", "H"),
    card("A", "H"),
    card("10", "S"),
    card("10", "D"),
    card("K", "C"),
  ]);

  t.strictDeepEqual(has(cards), { name: "Three of a kind", strength: 3, rank: "10", kickers: ["A", "K"] });
});

test("Three of a kind of 7", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("7", "H"),
    card("K", "C"),
    card("7", "S"),
    card("7", "D"),
    card("A", "H"),
  ]);

  t.strictDeepEqual(has(cards), { name: "Three of a kind", strength: 3, rank: "7", kickers: ["A", "K"] });
});
