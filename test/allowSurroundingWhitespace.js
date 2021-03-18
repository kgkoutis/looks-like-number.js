var test = require('tap').test
var looksLikeNumber = require('../looks-like-number.js')

test('allowSurroundingWhitespace', function (t) {
  
  var allowSurroundingWhitespace = true
  var testCases = [
        [{ input: ' 44' }, false],
        [{ input: '15 ' }, false],
        [{ input: ' 5 '}, false],
        [{ input: ' 44', allowSurroundingWhitespace : true }, true],
        [{ input: '15 ', allowSurroundingWhitespace : true }, true],
        [{ input: ' 5 ', allowSurroundingWhitespace : true }, true],
        [{ input: ' 5 ', allowSurroundingWhitespace : false }, false],
        [{ input: ' 5 ', allowSurroundingWhitespace : null }, false],
        [{ input: ' 5 ', allowSurroundingWhitespace : undefined }, false],
        [{ input: ' ', allowSurroundingWhitespace : true }, false],
        [{ input: ' 1 9 ', allowSurroundingWhitespace : true }, false]
    ]

  testCases.forEach(function(tCase) {
    t.equals(looksLikeNumber(tCase[0].input, tCase[0].allowSurroundingWhitespace ), tCase[1])
  });

  t.end()
})
