/* Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.
Examples

[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

 */

function highestRank(arr) {
    const frequences = arr.reduce((acc, el) => (acc[el] = 1 + (acc[el] | 0), acc), {})

    const max = Math.max(...Object.values(frequences))

    const maxes = Object.entries(frequences)
        .filter(el => el[1] === max)
        .sort((a, b) => b[0] - a[0])

    return Number(maxes[0][0])
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample tests", function () {
    it("should test", function () {
        var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
        assert.strictEqual(highestRank(arr), 12);
    });
});
