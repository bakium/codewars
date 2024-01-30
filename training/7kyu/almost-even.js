/* Description:

We need the ability to divide an unknown integer into a given number of even parts - or at least as even as they can be. The sum of the parts should be the original value, but each part should be an integer, and they should be as close as possible.

Complete the function so that it returns an array of integers representing the parts. If the input number is too small to split it into requested amount of parts, the additional parts should have value 0. Ignoring the order of the parts, there is only one valid solution for each input to your function!
Example:

splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]

Inputs

The input to your function will always be valid for this kata.
 */

/**
 * Returns a [parts]-length array of equal or nearly equal
 * integers that add up to [num].
 */
const splitInteger = function (num, parts) {
    return []
}

const chai = require('chai')
const { assert } = chai

describe('Simple Functionality', function () {
    it('should handle easy cases', function () {
        assert.deepEqual(splitInteger(10, 1).sort(), [10]);
        assert.deepEqual(splitInteger(2, 2).sort(), [1, 1]);
        assert.deepEqual(splitInteger(20, 5).sort(), [4, 4, 4, 4, 4]);
        assert.deepEqual(splitInteger(20, 6).sort(), [3, 3, 3, 3, 4, 4]);
    });
});
