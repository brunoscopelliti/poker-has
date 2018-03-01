const has = require("../index.js");
const card = require("./utils/card");

const tap = require("tap");
const test = tap.test;

test("Royal Straight Flush", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("K", "C"),
    card("J", "C"),
    card("A", "C"),
    card("10", "C"),
    card("Q", "C")
  ]);

  t.strictDeepEqual(has(cards), { strength: 256, rank: "A", kickers: [] });
});
