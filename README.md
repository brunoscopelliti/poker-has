# @botpoker/hand

You can install [@botpoker/hand](https://www.npmjs.com/package/@botpoker/hand) via npm:

```
npm i @botpoker/hand --save
```

## About @botpoker/hand

**@botpoker/hand** does just one thing: it tries to guess the strength of a given poker combination. It exports only one method:

```js
const whatIs = require("@botpoker/hand");
```

The `whatIs` function expects to be called with an array of five *cards*.
A `card` is an object with properties `rank`, and `type`, like the one used by [poker-deck](https://github.com/brunoscopelliti/poker-deck).

```js
whatIs([
  { rank: "6", type: "H" },
  { rank: "7", type: "D" },
  { rank: "9", type: "S" },
  { rank: "8", type: "C" },
  { rank: "5", type: "C" },
]);
```

This is a straight of 9... however `@botpoker/hand` know this is a combination with a strength of **4** compared to the other possible poker combinations.

```js
whatIs([
  { rank: "2", type: "D" },
  { rank: "3", type: "D" },
  { rank: "J", type: "D" },
  { rank: "5", type: "D" },
  { rank: "6", type: "D" },
]);
```

This is a flush, and the highest card is Jack; so this combination has a strength of **5**. In this case the expected result is:

```js
{ 
  name: "Flush",
  strength: 5,
  rank: "J",
  kickers: ["6", "5", "3", "2"],
}
```
