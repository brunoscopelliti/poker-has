const has = require("../index.js");
const card = require("./utils/card");

const tap = require("tap");
const test = tap.test;

test("Royal Straight Flush C", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("K", "C"),
    card("J", "C"),
    card("A", "C"),
    card("10", "C"),
    card("Q", "C"),
  ]);

  t.strictDeepEqual(has(cards), { strength: 256, rank: "A", kickers: [] });
});

test("Royal Straight Flush H", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("10", "H"),
    card("K", "H"),
    card("Q", "H"),
    card("J", "H"),
    card("A", "H"),
  ]);

  t.strictDeepEqual(has(cards), { strength: 256, rank: "A", kickers: [] });
});
