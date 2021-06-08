var test = require('tap').test
var looksLikeNumber = require('../looks-like-number.js')

test('basic', function (t) {

  var testCases = [
    [0, true],
    ['0', true],
    [-1.2, true],
    ['-1.2', true],
    ['3.3.3', false],
    [1e15, true],
    ['1.1e2', true],
    ['1e2e3', false],
    ['1,5', true],
    ['+1,5', true],
    ['1,5,1', false],
    ['..,.,', false],
    ['2,078.1', true],
    ['2,078,555.1', true],
    ['20,785,55.1', false],
    ['2,078,asda.1', false],
    ['2,07,855.1', false],
    ['2.078,555.1', false],
    ['2,078,555,999', false],
    ['20785,559,991,00', false],
    ['2,078555.1', false],
    ['2,3.1', false],
    ['2,.1', false],
    ['-2,078.1', true],
    ['-', false],
    ['+', false],
    [null, false],
    ['111a111', false ],
    ['',false],
    [[], false],
    [[''], false],
    [Number.MAX_VALUE, true],
    [Number.MIN_VALUE, true],
    [NaN, false],
    [Infinity, false],
    [-Infinity, false],
    [function (arg1, arg2) {}, false],
    [new Date(1,1,2021), false],
    [null, false],
    [undefined, false],
    [{a: '-9'}, false],
    [/\d+/g, false],
    [Symbol(), false],
  ]

  testCases.forEach(function(tCase) {
    t.equals(looksLikeNumber(tCase[0]), tCase[1])
  });

  t.end()
})
