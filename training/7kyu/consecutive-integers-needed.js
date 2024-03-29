/* Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

For example:
If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique. */

function consecutive(arr) {
    // short circuit evaluation
    return Math.max(...arr) - Math.min(...arr) - arr.length + 1 | 0

    // ternary (longer)
    // return arr.length < 2 ? 0 : Math.max(...arr) - Math.min(...arr) - arr.length + 1
}

const { assert } = require('chai')

describe("Tests", () => {
    it("test", () => {
        assert.equal(consecutive([4, 8, 6]), 2);
        assert.equal(consecutive([1, 2, 3, 4]), 0);
        assert.equal(consecutive([]), 0);
        assert.equal(consecutive([1]), 0);
    });
});
