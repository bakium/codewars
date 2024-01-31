/* Description:

Write a function that takes two array arguments, and returns a new array populated with the elements that appear in either array, but not in both. Elements should only appear once in the returned array.

The order of the elements in the result should follow what appears in the first array, then the second one.
Examples

[1, 2, 3, 3], [3, 2, 1, 4, 5]) --> [4, 5]

["tartar", "blanket", "cinnamon"], ["cinnamon", "blanket", "domino"] --> ["tartar", "domino"]

[77, "ciao"], [78, 42, "ciao"] --> [77, 78, 42]

[1, 2, 3, 3], [3, 2, 1, 4, 5, 4] --> [4,5]

[1, 2, 3] , [3, 3, 2, 1] --> []

SPECIAL THANKS: @JulianKolbe !
 */

function hotSingles(arr1, arr2) {
    const mergedArray = [...new Set([...arr1, ...arr2])]
    return mergedArray.filter(item => !arr1.includes(item) || !arr2.includes(item))
}

describe("Hot singles", function () {

    const chai = require('chai'), { deepEqual } = chai.assert;
    chai.config.truncateThreshold = 0;

    function doTest(a, b, expected) {
        const aStr = JSON.stringify(a), bStr = JSON.stringify(b);
        const actual = hotSingles(a, b);
        deepEqual(actual, expected, `for arrays:\n${aStr}\n${bStr}\n`);
    }

    it("Sample tests", function () {
        doTest([1, 2, 3, 3], [3, 2, 1, 4, 5], [4, 5]);
        doTest(["tartar", "blanket", "domino"], ["blanket"], ["tartar", "domino"]);
        doTest([77, "basketweave"], [78, 42, "basketweave"], [77, 78, 42]);
        doTest([100, 45, "ciao"], [100, 2, 3, 45, 5], ["ciao", 2, 3, 5]);
        doTest([10, 200, 30], [10, 20, 3, 4, 5, 200], [30, 20, 3, 4, 5]);
        doTest([1, 2, 3], [3, 3, 2, 1], []);
        doTest([], [], []);
        doTest([1, 2, 3, 3], [], [1, 2, 3]);
    });
});
