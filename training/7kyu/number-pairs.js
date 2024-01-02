/* Description:

In this Kata the aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.

Note: Both arrays have the same dimensions.

Example:

let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]
 */

function getLargerNumbers(a, b) {
    return []
}

const { assert } = require('chai')

describe("get_larger_numbers", function () {
    it("should work for some examples", function () {
        let a = [13, 64, 15, 17, 88]
        let b = [23, 14, 53, 17, 80]
        assert.deepEqual(getLargerNumbers(a, b), [23, 64, 53, 17, 88], `Wrong result for a = ${a}, b = ${b}`)
        a = [34, -64, 15, 17, 88]
        b = [23, 14, 53, 17, 80]
        assert.deepEqual(getLargerNumbers(a, b), [34, 14, 53, 17, 88], `Wrong result for a = ${a}, b = ${b}`)
    });
});
