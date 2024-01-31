/* Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Definition

An element is leader if it is greater than The Sum all the elements to its right side.
Task

Given an array/list [] of integers , Find all the LEADERS in the array.
Notes

    Array/list size is at least 3 .

    Array/list's numbers Will be mixture of positives , negatives and zeros

    Repetition of numbers in the array/list could occur.

    Returned Array/list should store the leading numbers in the same order in the original array/list .

Input >> Output Examples

arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}

Explanation:

    4 is greater than the sum all the elements to its right side

    Note : The last element 0 is equal to right sum of its elements (abstract zero).

arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}

Explanation:

    17 is greater than the sum all the elements to its right side

    5 is greater than the sum all the elements to its right side

    Note : The last element 2 is greater than the sum of its right elements (abstract zero).

arrayLeaders ({5, 2, -1}) ==> return {5, 2}

Explanation:

    5 is greater than the sum all the elements to its right side

    2 is greater than the sum all the elements to its right side

    Note : The last element -1 is less than the sum of its right elements (abstract zero).

arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}

Explanation:

    0 is greater than the sum all the elements to its right side

    -1 is greater than the sum all the elements to its right side

    3 is greater than the sum all the elements to its right side

    Note : The last element 2 is greater than the sum of its right elements (abstract zero).

Playing with Numbers Series
Playing With Lists/Arrays Series
For More Enjoyable Katas
ALL translations are welcomed
Enjoy Learning !!
Zizou
 */

function arrayLeaders(numbers) {
    // ReduceRight
    let res = []
    numbers.reduceRight((acc, item) => {
        if (item > acc) res.push(item)
        return acc + item
    }, 0)
    return res.reverse()

    // Double reduce
    // return numbers.reduce((acc, num, i) => {
    //     const rightSum = numbers.slice(i + 1).reduce((a, b) => a + b, 0)

    //     if (num > rightSum) acc.push(num)
    //     return acc
    // }, [])
}

const { assert } = require("chai");

describe('Basic Tests', function () {
    it('Positive Values', function () {
        assert.deepEqual(arrayLeaders([1, 2, 3, 4, 0]), [4]);
        assert.deepEqual(arrayLeaders([16, 17, 4, 3, 5, 2]), [17, 5, 2]);
    });
    it('Negative Values', function () {
        assert.deepEqual(arrayLeaders([-1, -29, -26, -2]), [-1]);
        assert.deepEqual(arrayLeaders([-36, -12, -27]), [-36, -12]);
    });
    it('Mixed Values', function () {
        assert.deepEqual(arrayLeaders([5, -2, 2]), [5, 2]);
        assert.deepEqual(arrayLeaders([0, -1, -29, 3, 2]), [0, -1, 3, 2]);
    });
});
