/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
 */

function findOdd(A) {
    // filter solution
    return A.find(item => A.filter(a => a === item).length % 2)
    // return A.filter(item => A.filter(a => a === item).length % 2)[0] // double filter, [0] not very pleasant

    // reduce more complex solution
    // const occurences = A.reduce((acc, item) => {
    //     acc[item] = (acc[item] | 0) + 1
    //     return acc
    // }, {})

    return Number(Object.entries(occurences).filter(occ => occ[1] % 2)[0][0])
}

const assert = require('chai').assert;

describe('Example tests', function () {

    function doTest(a, n) {
        assert.strictEqual(findOdd(a), n, `Incorrect answer for input=[${a}]`);
    }

    it("Example tests", () => {
        doTest([7], 7);
        doTest([0], 0);
        doTest([1, 1, 2], 2);
        doTest([0, 1, 0, 1, 0], 0);
        doTest([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1], 4);
    });

    it("Fixed tests", () => {
        doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
        doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
        doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
        doTest([10], 10);
        doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
        doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
    });
});
