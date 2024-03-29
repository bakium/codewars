/* Description:

A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.
 */

function dominator(arr) {

    // With fitler but use more ressource and hacky with [0][0]
    // const occurs = arr.map(el => arr.filter(n => n === el))
    //     .sort((a, b) => b.length - a.length)

    // return occurs[0].length > arr.length / 2
    //     ? occurs[0][0]
    //     : -1

    const occurs = {}

    for (let num of arr) {
        // occurs[num] = (occurs[num] || 0) + 1

        occurs[num] = ++occurs[num] || 1 // shortest but occurs[num]++ don't work !

        if (occurs[num] > arr.length / 2) return num
    }
    return -1
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("What dominates your array?", () => {
    it("Fixed tests", () => {
        assert.strictEqual(dominator([3, 4, 3, 2, 3, 1, 3, 3]), 3);
        assert.strictEqual(dominator([1, 2, 3, 4, 5]), -1);
        assert.strictEqual(dominator([1, 1, 1, 2, 2, 2]), -1);
        assert.strictEqual(dominator([1, 1, 1, 2, 2, 2, 2]), 2);
    })
});
