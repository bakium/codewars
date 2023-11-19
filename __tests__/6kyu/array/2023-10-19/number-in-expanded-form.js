/* Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!
 */

function expandedForm(num) {
    return [...num.toString()].reduce((acc, current, index, array) => {
        return current !== "0"
            ? [...acc, current + "0".repeat(array.length - 1 - index)]
            : acc
    }, []).join(" + ")
}

const { assert } = require('chai');

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(expandedForm(12), '10 + 2');
        assert.strictEqual(expandedForm(42), '40 + 2');
        assert.strictEqual(expandedForm(70304), '70000 + 300 + 4');
    });
});
