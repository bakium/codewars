/* Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

*/

function between(a, b) {
    const res = []
    while (a <= b) {
        res.push(a)
        a++
    }
    return res
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
    it("between(1, 4)", () => assert.deepEqual(between(1, 4), [1, 2, 3, 4]));
    it("between(-2, 2)", () => assert.deepEqual(between(-2, 2), [-2, -1, 0, 1, 2]));
});
