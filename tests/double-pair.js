"use strict";

const has = require("../index.js");
const card = require("./utils/card");

const tap = require("tap");
const test = tap.test;

test("Double Pair of 9 and 3 / 1", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("3", "H"),
    card("9", "H"),
    card("3", "S"),
    card("9", "D"),
    card("A", "C"),
  ]);

  t.strictSame(has(cards), { name: "Double Pair", strength: 2, rank: "9", kickers: ["3", "A"] });
});

test("Double Pair of 9 and 3 / 2", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("3", "H"),
    card("9", "H"),
    card("3", "S"),
    card("9", "D"),
    card("4", "C"),
  ]);

  t.strictSame(has(cards), { name: "Double Pair", strength: 2, rank: "9", kickers: ["3", "4"] });
});

test("Double Pair of 9 and 3 / 3", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("3", "H"),
    card("9", "H"),
    card("3", "S"),
    card("9", "D"),
    card("2", "C"),
  ]);

  t.strictSame(has(cards), { name: "Double Pair", strength: 2, rank: "9", kickers: ["3", "2"] });
});

test("Double Pair of 10 and 8", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("8", "H"),
    card("10", "H"),
    card("8", "S"),
    card("10", "D"),
    card("A", "C"),
  ]);

  t.strictSame(has(cards), { name: "Double Pair", strength: 2, rank: "10", kickers: ["8", "A"] });
});

test("Double Pair of Q and 10", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("Q", "H"),
    card("10", "H"),
    card("Q", "S"),
    card("10", "D"),
    card("A", "C"),
  ]);

  t.strictSame(has(cards), { name: "Double Pair", strength: 2, rank: "Q", kickers: ["10", "A"] });
});

test("Double Pair issue#1", (t) => {
  t.plan(1);
  const cards = Object.freeze([
    card("K", "H"),
    card("K", "D"),
    card("Q", "S"),
    card("Q", "C"),
    card("5", "C"),
  ]);

  t.strictSame(has(cards), { name: "Double Pair", strength: 2, rank: "K", kickers: ["Q", "5"] });
});
