/* Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

If n == 0 return an empty sequence []
Examples

var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];
 */

// function first(arr, n) {
//     return arr.slice(0, n || 1)
//     // passed but not very explicit
//     // better to add a default parameter
// }

function first(arr, n = 1) {
    return arr.slice(0, n)
}

const { assert } = require('chai');

describe("Tests", () => {
    it("test", () => {
        const arr = ['a', 'b', 'c', 'd', 'e'];
        assert.sameOrderedMembers(first([...arr]), ['a']);
        assert.sameOrderedMembers(first([...arr], 2), ['a', 'b']);
    });
});
