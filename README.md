[![npm version](https://badge.fury.io/js/looks-like-number.svg)](https://badge.fury.io/js/looks-like-number)
[![Build Status](https://api.travis-ci.org/repos/kgkoutis/looks-like-number.js.svg?branch=main)](https://api.travis-ci.org/repos/kgkoutis/looks-like-number.js?branch=main)
[![Coverage Status](https://coveralls.io/repos/github/kgkoutis/looks-like-number.js/badge.svg?branch=main)](https://coveralls.io/github/kgkoutis/looks-like-number.js?branch=main)

# looks-like-number.js

General utility function to verify its argument looks like a number

## Usage

```javascript
var looksLikeNumb = require("looks-like-number")
var allowLeftRightSpaces = true;

looksLikeNumb(0) // true
looksLikeNumb('0') // true
looksLikeNumb('-1.2') // true
looksLikeNumb(Number.MAX_VALUE) // true
looksLikeNumb('1e15') // true
looksLikeNumb('1,5') // true

looksLikeNumb([]) // false
looksLikeNumb(new Date(1,1,2021)) // false
looksLikeNumb(undefined) // false
looksLikeNumb(null) // false
looksLikeNumb({a: '-9'}) // false
looksLikeNumb(/\d+/g) // false
looksLikeNumb(function(){ ... }) // false
looksLikeNumb(Symbol()) // false
looksLikeNumb('') // false

looksLikeNumb(' 44') // false
looksLikeNumb('15 ') // false
looksLikeNumb(' 5 ') // false
looksLikeNumb(' 44', allowLeftRightSpaces) // true
looksLikeNumb('15 ', allowLeftRightSpaces) // true
looksLikeNumb(' 5 ', allowLeftRightSpaces) // true
looksLikeNumb(' ', allowLeftRightSpaces) // false
looksLikeNumb(' 1 9 ', allowLeftRightSpaces) // false
```
