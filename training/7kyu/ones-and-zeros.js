/* Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples: */

const binaryArrayToNumber = arr => {

    // with reverse()
    return arr.reverse().reduce((acc, el, i) => acc + el * Math.pow(2, i), 0)

    // without reverse()
    // return arr.reduce((acc, el, i) => acc + el * Math.pow(2, arr.length - i - 1), 0)

    // shorter
    // return arr.reduce((acc, el, i) => (acc * 2) + el, 0)
};

const { assert } = require('chai')

describe("One's and Zero's", () => {
    it("Example tests", () => {
        assert.equal(binaryArrayToNumber([0, 0, 0, 1]), 1);
        assert.equal(binaryArrayToNumber([0, 0, 1, 0]), 2);
        assert.equal(binaryArrayToNumber([1, 1, 1, 1]), 15);
        assert.equal(binaryArrayToNumber([0, 1, 1, 0]), 6);
        assert.equal(binaryArrayToNumber([1, 0, 0, 1]), 9);
    });
});
