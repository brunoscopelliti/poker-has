# poker-has

You can install poker-has via npm:

```
npm i poker-has --save
```

## About poker-has

**poker-has** does just one thing: it tries to guess the strength of a given poker combination. It exports only one method:

```
const whatIs = require("poker-has");
```

The `whatIs` function expects to be called with an array of five *cards*.
A `card` is an object with properties `rank`, and `type`, like the one used by [poker-deck](https://github.com/brunoscopelliti/poker-deck).

```
whatIs([
  { rank: "6", type: "H" },
  { rank: "7", type: "D" },
  { rank: "9", type: "S" },
  { rank: "8", type: "C" },
  { rank: "5", type: "C" }
]);
```

This is a straight of 9... however `poker-has` know this is a combination with a strength of **4** compared to the other possible poker combinations.

```
whatIs([
  { rank: "2", type: "D" },
  { rank: "3", type: "D" },
  { rank: "J", type: "D" },
  { rank: "5", type: "D" },
  { rank: "6", type: "D" }
]);
```

This is a flush, and the highest card is Jack; so this combination has a strength of **5**. In this case the expected result is:

```
{ name: "Flush", strength: 5, rank: "J", kickers: ["6", "5", "3", "2"] }
```
