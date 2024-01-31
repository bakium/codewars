/* Description:

Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

find_missing([1, 2, 2, 3], [1, 2, 3]) => 2

find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8

The first array will always have at least one element.
 */

function findMissing(arr1, arr2) {
    const reduceFn = (sign) = (a, b) => a + b
    return arr1.reduce(reduceFn, 0) - arr2.reduce(reduceFn, 0)
}

const { assert } = require('chai')

describe("Basic tests", function () {
    it('Should pass', () => {
        assert.deepEqual(findMissing([1, 2, 3], [1, 3]), 2);
        assert.deepEqual(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]), 8);
        assert.deepEqual(findMissing([7], []), 7);
        assert.deepEqual(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]), 3);
        assert.deepEqual(findMissing([0, 0, 0, 0, 0], [0, 0, 0, 0]), 0);
    })
});
