/* In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
-- We sort by highest frequency to lowest frequency.
-- If two elements have same frequency, we sort by increasing value.

More examples in test cases.

Good luck!

Please also try Simple time difference
 */

function solve(arr) {
    //..
}

const { assert } = require('chai')

describe("Basic tests", function () {
    it('test', () => {
        assert.deepEqual(solve([2, 3, 5, 3, 7, 9, 5, 3, 7]), [3, 3, 3, 5, 5, 7, 7, 2, 9])
        assert.deepEqual(solve([1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1]), [1, 1, 1, 0, 0, 6, 6, 8, 8, 2, 3, 5, 9])
        assert.deepEqual(solve([5, 9, 6, 9, 6, 5, 9, 9, 4, 4]), [9, 9, 9, 9, 4, 4, 5, 5, 6, 6])
        assert.deepEqual(solve([4, 4, 2, 5, 1, 1, 3, 3, 2, 8]), [1, 1, 2, 2, 3, 3, 4, 4, 5, 8])
        assert.deepEqual(solve([4, 9, 5, 0, 7, 3, 8, 4, 9, 0]), [0, 0, 4, 4, 9, 9, 3, 5, 7, 8])
    })
});
