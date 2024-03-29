/* Task:

You have to write a function pattern which returns the following Pattern(See Examples) upto n number of rows.

    Note:Returning the pattern is not the same as Printing the pattern.

Rules/Note:

    The pattern should be created using only unit digits.
    If n < 1 then it should return "" i.e. empty string.
    The length of each line is same, and is equal to the number of characters in a line i.e n.
    Range of Parameters (for the sake of CW Compiler) :
        n ∈ (-50,150]

Examples:

    pattern(8):

    88888888
    87777777
    87666666
    87655555
    87654444
    87654333
    87654322
    87654321

    pattern(17):

    77777777777777777
    76666666666666666
    76555555555555555
    76544444444444444
    76543333333333333
    76543222222222222
    76543211111111111
    76543210000000000
    76543210999999999
    76543210988888888
    76543210987777777
    76543210987666666
    76543210987655555
    76543210987654444
    76543210987654333
    76543210987654322
    76543210987654321

List of all my katas
 */

function pattern(n) {
    let output = "";

    for (let i = n; i > 0; i--) {
        for (let j = n; j > 0; j--) {
            (i > j)
                ? output += String(i).at(-1) // or Math.max(i, j) % 10
                : output += String(j).at(-1)
        }
        output += '\n'
    }
    return output.slice(0, -1)

    // flatMap longer less efficient solution
    //    return Array.from({ length: n }, (_, i) =>
    //         Array.from({ length: n }, (_, j) =>
    //             (n - Math.min(i, j)) % 10
    //         ))
    //        .flatMap(n => n.join("")).join("\n")
}

const chai = require('chai');
const assert = chai.assert;

describe("Basic Tests", function () {
    it('Should return the write pattern', () => {
        assert.strictEqual(pattern(1), "1");
        assert.strictEqual(pattern(2), "22\n21");
        assert.strictEqual(pattern(3), "333\n322\n321");
        assert.strictEqual(pattern(7), "7777777\n7666666\n7655555\n7654444\n7654333\n7654322\n7654321");
        assert.strictEqual(pattern(17), "77777777777777777\n76666666666666666\n76555555555555555\n76544444444444444\n76543333333333333\n76543222222222222\n76543211111111111\n76543210000000000\n76543210999999999\n76543210988888888\n76543210987777777\n76543210987666666\n76543210987655555\n76543210987654444\n76543210987654333\n76543210987654322\n76543210987654321");
        assert.strictEqual(pattern(27), "777777777777777777777777777\n766666666666666666666666666\n765555555555555555555555555\n765444444444444444444444444\n765433333333333333333333333\n765432222222222222222222222\n765432111111111111111111111\n765432100000000000000000000\n765432109999999999999999999\n765432109888888888888888888\n765432109877777777777777777\n765432109876666666666666666\n765432109876555555555555555\n765432109876544444444444444\n765432109876543333333333333\n765432109876543222222222222\n765432109876543211111111111\n765432109876543210000000000\n765432109876543210999999999\n765432109876543210988888888\n765432109876543210987777777\n765432109876543210987666666\n765432109876543210987655555\n765432109876543210987654444\n765432109876543210987654333\n765432109876543210987654322\n765432109876543210987654321");
        assert.strictEqual(pattern(0), "");
        assert.strictEqual(pattern(-89), "");
    })
});
