const has = require("../index.js");
const card = require("./utils/card");

const tap = require("tap");
const test = tap.test;

test("Straight Flush rank 9", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("6", "H"),
    card("7", "H"),
    card("9", "H"),
    card("8", "H"),
    card("5", "H")
  ]);

  t.strictDeepEqual(has(cards), { strength: 128, rank: "9", kickers: [] });
});

test("Straight Flush of A Low", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("3", "D"),
    card("4", "D"),
    card("2", "D"),
    card("5", "D"),
    card("A", "D")
  ]);

  t.strictDeepEqual(has(cards), { strength: 128, rank: "5", kickers: [] });
});
