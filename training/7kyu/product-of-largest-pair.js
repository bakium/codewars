/* Description:

Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.
All inputs will be valid.
Passing [2, 6, 3] should return 18, the product of [6, 3].

Disclaimer: only accepts solutions that are faster than his, which has a running time O(nlogn).

maxProduct([2, 1, 5, 0, 4, 3])              // 20
maxProduct([7, 8, 9])                       // 72
maxProduct([33, 231, 454, 11, 9, 99, 57])   // 104874
 */

function maxProduct(a) {
    // With sort()
    // a.sort((a, b) => b - a)
    // return a[0] * a[1]

    // with findIndex() and splice()
    const removeMax = arr => {
        const maxIndex = a.findIndex(item => item === Math.max(...a))
        return a.splice(maxIndex, 1)
    }

    return removeMax(a) * removeMax(a)
}

const { assert } = require("chai")

describe("Max Product", function () {
    it("should return the max product of a pair in given array", function () {
        assert.equal(maxProduct([56, 335, 195, 443, 6, 494, 252]), 218842);
        assert.equal(maxProduct([154, 428, 455, 346]), 194740);
        assert.equal(maxProduct([39, 135, 47, 275, 37, 108, 265, 457, 2, 133, 316, 330, 153, 253, 321, 411]), 187827);
        assert.equal(maxProduct([136, 376, 10, 146, 105, 63, 234]), 87984);
        assert.equal(maxProduct([354, 463, 165, 62, 472, 53, 347, 293, 252, 378, 420, 398, 255, 89]), 218536);
        assert.equal(maxProduct([346, 446, 26, 425, 432, 349, 123, 269, 285, 93, 75, 14]), 192672);
        assert.equal(maxProduct([134, 320, 266, 299]), 95680);
        assert.equal(maxProduct([114, 424, 53, 272, 128, 215, 25, 329, 272, 313, 100, 24, 252]), 139496);
        assert.equal(maxProduct([375, 56, 337, 466, 203]), 174750);
    });
});
