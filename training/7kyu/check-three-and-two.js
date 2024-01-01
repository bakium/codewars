/* Description:

Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.
Examples

["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"

 */

function checkThreeAndTwo(array) {
    return [...'abc'].map(c => array.filter(x => x == c).length).sort() == '0,2,3'
}

const { assert } = require('chai')


describe("Basic tests", function () {
    it('Should pass', () => {
        assert.equal(checkThreeAndTwo(["a", "a", "a", "b", "b"]), true);
        assert.equal(checkThreeAndTwo(["a", "c", "a", "c", "b"]), false);
        assert.equal(checkThreeAndTwo(["a", "a", "a", "a", "a"]), false);
    })
});
