/* Description:

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
 */

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((acc, sheep) => sheep === true ? acc + 1 : acc, 0)
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  test("Fake test", () => { })
  it("test", () => {
    var array1 = [true, true, true, false,
      true, true, true, true,
      true, false, true, false,
      true, false, false, true,
      true, true, true, true,
      false, false, true, true];

    assert.deepEqual(countSheeps(array1), 17, "There are 17 sheeps in total")
  });
});
