/* Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.
Examples

[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

 */

function highestRank(arr) {
    const getNumFrequence = x => arr.filter(n => n === x).length

    const sortedByFreq = arr
        .sort((a, b) => getNumFrequence(b) - getNumFrequence(a) || b - a)

    return sortedByFreq[0]
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample tests", function () {
    it("should test", function () {
        var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 4, 4, 4];
        assert.strictEqual(highestRank(arr), 4);
    })
    it("should test", function () {
        var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
        assert.strictEqual(highestRank(arr), 12);
    });
});
