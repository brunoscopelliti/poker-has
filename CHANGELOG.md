# Changelog

## 12/01/2019 v4.0.1

* Improved README.md

## 12/01/2019 v4.0.0

* [Breaking?] Removed dependency from `ramda`.

* `ramda`-less rewrite... public methods, and return types are not affected by this rewrite.

## 23/03/2018 v3.0.0

* [Breaking] Changed combination strength levels, and added the combination name.

  ```
  // Before (non sense):
  ... double-pair: 2, three-of-a-kind: 4, straight: 8 ...

  // Now
  ... double-pair: 2, three-of-a-kind: 3, straight: 4 ...
  ```

* `ramda` based rewrite.

* Split unit tests for easier readability.

* Removed `grunt`. Added `eslint`, and `pre-commit`.
