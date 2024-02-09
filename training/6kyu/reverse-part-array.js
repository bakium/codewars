/* Given an array, return the reversed version of the array (a different kind of reverse though), you reverse portions of the array, you'll be given a length argument which represents the length of each portion you are to reverse.

E.g

selReverse([1,2,3,4,5,6], 2)
 //=> [2,1, 4,3, 6,5]

if after reversing some portions of the array and the length of the remaining portion in the array is not up to the length argument, just reverse them.

selReverse([2,4,6,8,10,12,14,16], 3)
 //=> [6,4,2, 12,10,8, 16,14]

selReverse(array, length)

    array - array to reverse
    length - length of each portion to reverse

Note : if the length argument exceeds the array length, reverse all of them, if the length argument is zero do not reverse at all.
 */

function selReverse(array, length) {

    // Recursion with ternary operator
    return array.length * length
        ? [
            ...array.slice(0, length).reverse(),
            ...selReverse(array.slice(length), length)
        ]
        : array

    // // Recursion
    // if (array.length * length) { // to include if (length === 0)
    //     return [
    //         ...array.slice(0, length).reverse(),
    //         ...selReverse(array.slice(length), length)
    //     ]
    // } else {
    //     return array
    // }

    // // with spread operator
    // if (length === 0) return array

    // let finalArray2 = []
    // while (array.length > 0) {
    //     finalArray2 = [
    //         ...finalArray2,
    //         ...array.splice(0, length || array.length).reverse()
    //     ]
    // }

    // return finalArray2

    // // Shorter version (without map)
    // if (length === 0) return array

    // let finalArray = []
    // while (array.length > 0) {
    //     finalArray.push(array.splice(0, length || array.length).reverse())
    // }

    // return finalArray.flat()

    // // Shorter version
    // if (length === 0) return array

    // let tmp = []
    // while (array.length > 0) {
    //     tmp.push(array.splice(0, length))
    // }

    // return tmp.map((a) => a.reverse()).flat()

    // Long first version
    // if (length === 0) return array

    // let res = []
    // let innerArray = []

    // for (let i = 1; i < array.length + 1; i++) {
    //     if (i % length === 0) {
    //         innerArray.push(array[i - 1])
    //         res.push(innerArray)
    //         innerArray = []
    //     } else {
    //         innerArray.push(array[i - 1])
    //     }
    // }
    // if (innerArray.length) res.push(innerArray)
    // return res.map(a => a.reverse()).flat()
}

const { assert, config } = require('chai');
config.truncateThreshold = 0;

describe('Tests', () => {
    function test(array, length, expected) {
        let actual = selReverse(array, length);
        let message = `Test failed for\n  array = [ ${array.join(', ')} ]\n  length = ${length}\nAssertion error`;
        assert.deepEqual(actual, expected, message);
    }

    it('Sample Tests', () => {
        test([2, 4, 6, 8, 10, 12, 14, 16], 3, [6, 4, 2, 12, 10, 8, 16, 14]);
        test([1, 2, 3, 4, 5, 6], 2, [2, 1, 4, 3, 6, 5]);
        test([1, 2, 3, 4, 5, 6], 0, [1, 2, 3, 4, 5, 6]);
        test([1, 2, 3, 4, 5, 6], 1, [1, 2, 3, 4, 5, 6]);
        test([1, 2, 3, 4, 5, 6], 10, [6, 5, 4, 3, 2, 1]);
    });
});
