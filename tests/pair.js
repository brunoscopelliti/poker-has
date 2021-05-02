"use strict";

const has = require("../index.js");
const card = require("./utils/card");

const tap = require("tap");
const test = tap.test;

test("Pair of Q", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("2", "H"),
    card("4", "H"),
    card("Q", "S"),
    card("Q", "D"),
    card("9", "C"),
  ]);

  t.strictSame(has(cards), { name: "Pair", strength: 1, rank: "Q", kickers: ["9", "4", "2"] });
});

test("Pair of 10", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("10", "H"),
    card("4", "H"),
    card("10", "S"),
    card("Q", "D"),
    card("9", "C"),
  ]);

  t.strictSame(has(cards), { name: "Pair", strength: 1, rank: "10", kickers: ["Q", "9", "4"] });
});

test("Pair of 3", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("3", "H"),
    card("4", "H"),
    card("3", "S"),
    card("Q", "D"),
    card("9", "C"),
  ]);

  t.strictSame(has(cards), { name: "Pair", strength: 1, rank: "3", kickers: ["Q", "9", "4"] });
});

test("Pair of 2", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("2", "H"),
    card("A", "H"),
    card("2", "S"),
    card("J", "D"),
    card("Q", "C"),
  ]);

  t.strictSame(has(cards), { name: "Pair", strength: 1, rank: "2", kickers: ["A", "Q", "J"] });
});

test("A different pair of 2", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("2", "H"),
    card("A", "H"),
    card("2", "S"),
    card("Q", "D"),
    card("J", "C"),
  ]);

  t.strictSame(has(cards), { name: "Pair", strength: 1, rank: "2", kickers: ["A", "Q", "J"] });
});
