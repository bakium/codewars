/* We need a function count_sel() that receives an array or list of integers (positive and negative) and may give us the following information in the order and structure presented bellow:

[(1), (2), (3), [[(4)], 5]]

(1) - Total amount of received integers.

(2) - Total amount of different values the array has.

(3) - Total amount of values that occur only once.

(4) and (5) both in a list

(4) - It is (or they are) the element(s) that has (or have) the maximum occurrence. If there are more than one, the elements should be sorted (by their value obviously)

(5) - Maximum occurrence of the integer(s)

Let's see some cases

____ count_sel([-3, -2, -1, 3, 4, -5, -5, 5, -1, -5]) ----> [10, 7, 5, [[-5], 3]]

(1) - The list has ten elements (10 numbers)

(2) - We have seven different values: -5, -3, -2, -1, 3, 4, 5 (7 values)

(3) - The numbers that occur only once: -3, -2, 3, 4, 5 (5 values)

(4) and (5) - The number -5 occurs three times (3 occurrences)

____ count_sel([4, 4, 2, -3, 1, 4, 3, 2, 0, -5, 2, -2, -2, -5]) ----> [14, 8, 4, [[2, 4], 3]]

Enjoy it and happy coding!!
 */

function countSel(lst) {

    const uniq = new Set(lst)
    const onlyOnce = lst.filter(el => lst.indexOf(el) === lst.lastIndexOf(el))

    const occurences = lst.reduce((acc, el) => (acc[el] = 1 + (acc[el] | 0), acc), {})

    const occEntries = Object.entries(occurences)
    const occValues = Object.values(occurences)

    const max = Math.max(...occValues)
    const maxCount = occEntries.filter(el => el[1] === max)

    const maxesValues = Object
        .values(maxCount)
        .map(max => Number(max[0]))
        .sort((a, b) => a - b)

    return [lst.length, uniq.size, onlyOnce.length, [maxesValues, max]]
}

const { assert } = require('chai')

describe("Example Tests", function () {
    it("Simple Cases", function () {
        assert.deepEqual(countSel([-3, -2, -1, 3, 4, -5, -5, 5, -1, -5]), [10, 7, 5, [[-5], 3]]);
        assert.deepEqual(countSel([5, -1, 1, -1, -2, 5, 0, -2, -5, 3]), [10, 7, 4, [[-2, -1, 5], 2]]);
        assert.deepEqual(countSel([-2, 4, 4, -2, -2, -1, 3, 5, -5, 5]), [10, 6, 3, [[-2], 3]]);
        assert.deepEqual(countSel([4, -5, 1, -5, 2, 4, -1, 4, -1, 1]), [10, 5, 1, [[4], 3]]);
        assert.deepEqual(countSel([4, 4, 2, -3, 1, 4, 3, 2, 0, -5, 2, -2, -2, -5]), [14, 8, 4, [[2, 4], 3]]);
    });
});
