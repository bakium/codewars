/* In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:

[1, -1, 2, -2, 3] => 3

3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4

-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3

(the only-positive or only-negative integer may appear more than once)

Good luck!
 */

function solve(arr) {
    // best solution because give an unique result
    return arr.find(el => !arr.includes(-el))

    // good solution
    // return arr.filter((a, _) => !arr.includes(-a))[0]

    // Too complex solution
    // return [...new Set(arr)].reduce((a, b) => a + b)
}

const { assert } = require('chai')

describe("Basic tests", function () {
    it('Test', () => {
        assert.equal(solve([1, -1, 2, -2, 3]), 3);
        assert.equal(solve([-3, 1, 2, 3, -1, -4, -2]), -4);
        assert.equal(solve([1, -1, 2, -2, 3, 3]), 3);
        assert.equal(solve([-110, 110, -38, -38, -62, 62, -38, -38, -38]), -38);
        assert.equal(solve([-9, -105, -9, -9, -9, -9, 105]), -9);
    })
})
