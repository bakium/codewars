/* An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:

solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
solve([5,4,3,2,1]) = [5,4,3,2,1]

Notice that the last element is always included. All numbers will be greater than 0.

More examples in the test cases.

Good luck!
 */

function solve(arr) {
    // No need to a reduceRight because we don't need to
    // sum the right elements, a filter with Math.max() is enought
    return arr.filter((el, i) => el > Math.max(...arr.slice(i + 1)))
};

const { assert } = require('chai')

describe("Basic tests", function () {
    it('Should pass', () => {
        assert.deepEqual(solve([16, 17, 14, 3, 14, 5, 2]), [17, 14, 5, 2]);
        assert.deepEqual(solve([92, 52, 93, 31, 89, 87, 77, 105]), [105]);
        assert.deepEqual(solve([75, 47, 42, 56, 13, 55]), [75, 56, 55]);
        assert.deepEqual(solve([67, 54, 27, 85, 66, 88, 31, 24, 49]), [88, 49]);
        assert.deepEqual(solve([76, 17, 25, 36, 29]), [76, 36, 29]);
        assert.deepEqual(solve([104, 18, 37, 9, 36, 47, 28]), [104, 47, 28]);
    })
});
