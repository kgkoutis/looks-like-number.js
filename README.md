# looks-like-number.js

General utility function to verify its argument looks like a number

## USAGE

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
looksLikeNumb(' 44', allowLeftRightSpaces) // false
looksLikeNumb('15 ', allowLeftRightSpaces) // true
looksLikeNumb(' 5 ', allowLeftRightSpaces) // true
looksLikeNumb(' ', allowLeftRightSpaces) // false
looksLikeNumb(' 1 9 ', allowLeftRightSpaces) // false
```
