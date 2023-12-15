/* Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples: */

const binaryArrayToNumber = arr => {
    // your code
};

const { assert } = require('chai')

describe("One's and Zero's", () => {
    it("Example tests", () => {
        assert.equal(binaryArrayToNumber([0, 0, 0, 1]), 1);
        assert.equal(binaryArrayToNumber([0, 0, 1, 0]), 2);
        assert.equal(binaryArrayToNumber([1, 1, 1, 1]), 15);
        assert.equal(binaryArrayToNumber([0, 1, 1, 0]), 6);
    });
});
