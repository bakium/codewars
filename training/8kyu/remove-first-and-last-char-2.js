/* This is a spin off of my first kata.

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
Examples

"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL

 */


function array(string) {
    // Too long solution
    // const splitedString = string.split(",")
    // return splitedString.length >= 3
    //     ? string.split(",").slice(1, -1).join(" ")
    //     : null
    return string.split(",").slice(1, -1).join(" ") || null
}

const { assert } = require('chai');

describe('Sample Tests', function () {
    function test(string, expected) {
        it(`string='${string}'`, function () {
            assert.strictEqual(array(string), expected);
        });
    }

    test('', null);
    test('1', null);
    test('A1,B2', null);
    test('1,2,3', '2');
    test('1,2,3,4', '2 3');
    test('A1,B2,C3,D4,E5', 'B2 C3 D4');
    test('A,1,23,456,78,9,Z', '1 23 456 78 9');
});
