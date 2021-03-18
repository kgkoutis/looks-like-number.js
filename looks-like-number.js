// looks-like-number gives true to 1, 0, '0', '-1', '1.1e2', Number.MAX_VALUE, '-1,23', etc but denies anything else 
// like arrays, objects, functions, dates, regexes, objects, etc. including antipatterns like ' ', '', ' 1', '1 ', ' 1 ', '1 2' 
// To allow left and right spaces for strings like ' 12', '33 ', ' 1 ', then set the second parameter to true


module.exports = looksLikeNumber
function looksLikeNumber (x, allowSurroundingWhitespace) {
    if (typeof x === 'symbol' || typeof x === 'object' || typeof x === 'boolean') return false
    if (typeof x === 'string' || x instanceof String) {
        x = x.replace(/,/gi, '.')
        if (allowSurroundingWhitespace) x = x.replace(/^\s+|\s+$|\s+(?=\s)/g, '')
        if (/(^$|^\s|\s$)/.test(x)) return false
    }
    return !isNaN(x) && isFinite(x)
}