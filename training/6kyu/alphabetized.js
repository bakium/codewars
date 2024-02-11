/* The alphabetized kata

Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words containing the english alphabet letters.

Example:

alphabetized("The Holy Bible") // "BbeehHilloTy"
 */


function alphabetized(s) {
    return [...s.replace(/[^a-zA-Z]/g, '')]
        .sort((a, b) => a.localeCompare(b.toLowerCase()))
        .join("")
}

const { assert } = require('chai')

describe('wellSorted(s)', function () {
    it('should handle "the good book"', function () {
        assert.equal(alphabetized('The Holy Bible'), 'BbeehHilloTy')
    })
})
