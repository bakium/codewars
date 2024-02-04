/* Given three arrays of integers, return the sum of elements that are common in all three arrays.

For example:

common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays

More examples in the test cases.

Good luck!
 */

function common(a, b, c) {
}

const { assert } = require('chai')

describe("Basic tests", function () {
    it('Should pass', () => {
        assert.deepEqual(common([1, 2, 3], [5, 3, 2], [7, 3, 2]), 5);
        assert.deepEqual(common([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]), 7);
    })
});
