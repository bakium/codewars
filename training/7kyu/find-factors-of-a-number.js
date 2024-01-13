/* Description:

Create a function that takes a number and finds the factors of it, listing them in descending order in an array.

If the parameter is not an integer or less than 1, return -1. In C# return an empty array.

For Example: factors(54) should return [54, 27, 18, 9, 6, 3, 2, 1]
 */

function factors(x) {

}

const { assert } = require('chai')
describe("Tests", () => {
    it("test", () => {
        assert.deepEqual(factors(54), [54, 27, 18, 9, 6, 3, 2, 1])
        assert.deepEqual(factors(9), [9, 3, 1])
        assert.deepEqual(factors(-4), -1)
        assert.deepEqual(factors('9'), -1)
    });
});
