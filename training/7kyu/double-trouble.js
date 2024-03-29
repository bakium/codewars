/* Description:

Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.

Example:

x = [1, 2, 3, 4, 5]
t = 3

1+2 = t, so remove 2. No other pairs = t, so rest of array remains:

[1, 3, 4, 5]

Work through the array from left to right.

Return the resulting array.
 */

function trouble(x, t) {
    return x.reduce((acc, current) => acc.at(-1) + current === t ? acc : [...acc, current], [])
}

const { assert } = require('chai')


describe("Example tests", () => {
    it('Test', () => {
        assert.deepEqual(trouble([1, 3, 5, 6, 7, 4, 3], 7), [1, 3, 5, 6, 7, 4]);
        assert.deepEqual(trouble([4, 1, 1, 1, 4], 2), [4, 1, 4]);
        assert.deepEqual(trouble([2, 2, 2, 2, 2, 2], 4), [2]);
        assert.deepEqual(trouble([2, 6, 2], 8), [2, 2]);
    })
});
