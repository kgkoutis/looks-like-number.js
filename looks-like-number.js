// looks-like-number gives true to 1, 0, '0', '-1', '1.1e2', Number.MAX_VALUE, '-1,23', etc but denies anything else
// like arrays, objects, functions, dates, regexes, objects, etc. including antipatterns like ' ', '', ' 1', '1 ', ' 1 ', '1 2'
// To allow left and right spaces for strings like ' 12', '33 ', ' 1 ', then set the second parameter to true


module.exports = looksLikeNumber
function looksLikeNumber (x, allowSurroundingWhitespace) {
    if (typeof x === 'symbol' || typeof x === 'object' || typeof x === 'boolean') return false
    if (typeof x === 'string' || x instanceof String) {
        var commaIndices = [];
        for (var i=0; i<x.length;i++) {
          if (x[i] === ',') commaIndices.push(i);
          if (commaIndices.length > 1 && commaIndices[0] == 1 && !samePairwiseDifferenceForCommas(commaIndices)) return false;
        }
        var lastCommaIndex = x.lastIndexOf(',')
        var lastDotIndex = x.lastIndexOf('.')
        var xHasCommaBeforeDotOrHasNeither = lastCommaIndex <= lastDotIndex && (lastDotIndex - lastCommaIndex) === 4
        if (!xHasCommaBeforeDotOrHasNeither) {
          x = x.replace(/,/gi, '.')
        } else {
          x = x.replace(/,/g, '')
        }
        if (allowSurroundingWhitespace) x = x.replace(/^\s+|\s+$|\s+(?=\s)/g, '')
        if (/(^$|^\s|\s$)/.test(x)) return false
    }
    return !isNaN(x) && isFinite(x)
}

function samePairwiseDifferenceForCommas(arr) {
  var previousDifference = 4
  var samePairwiseDifference = true;
  for (i = 0; i < arr.length - 1; i++) {
      var nextdiff = arr[i + 1] - arr[i];
      var same = nextdiff === previousDifference;
      previousDifference = nextdiff
      samePairwiseDifference = samePairwiseDifference && same;
  }

  return samePairwiseDifference;
}
