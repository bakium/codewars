/* Write a function that takes as parameters an array (arr) and 2 integers (x and y). The function should return the mean between the mean of the the first x elements of the array and the mean of the last y elements of the array.

The mean should be computed if both x and y have values higher than 1 but less or equal to the array's length. Otherwise the function should return -1.
Examples

[1, 3, 2, 4], 2, 3 => should return 2.5

because: the mean of the the first 2 elements of the array is (1+3)/2=2 and the mean of the last 3 elements of the array is (4+2+3)/3=3 so the mean of those 2 means is (2+3)/2=2.5.

[1, 3, 2, 4], 1, 2 => should return -1

because x is not higher than 1.

[1, 3, 2, 4], 2, 8 => should return -1

because 8 is higher than the array's length.
 */

function getMean(arr, x, y) {

  if (x < 2 || y < 2 || x > arr.length || y > arr.length) return -1

  const beginMean = arr.slice(0, x).reduce((a, b) => a + b) / x
  const endMean = arr.slice(-y).reduce((a, b) => a + b) / y

  return (beginMean + endMean) / 2
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", function () {
  it("Tests", () => {
    assert.strictEqual(getMean([1, 3, 2, 4], 2, 3), 2.5);
    assert.strictEqual(getMean([1, 3, 2], 2, 2), 2.25);
    assert.strictEqual(getMean([1, 3, 2, 4], 1, 2), -1);
    assert.strictEqual(getMean([1, 3, 2, 4], 2, 8), -1);
  })
});
