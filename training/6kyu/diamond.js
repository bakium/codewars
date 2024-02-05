/* Description:

Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.
Task

You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
Examples

A size 3 diamond:

 *
***
 *

...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *

...that is:

"  *\n ***\n*****\n ***\n  *\n"

 */

function diamond(n) {

    if (n < 1 || n % 2 === 0) return null

    // let res = []
    // for (let i = n; i < 0; i -= 2) {
    //     let stars = '*'.repeat(n)
    //     let spaces = ' '.repeat(n)
    //     if (i === n) { res.push(stars, '\n') }
    //     else {
    //         res.unshift(spaces + stars)
    //         res.push(spaces + stars)
    //     }
    // }

    // return res

    let res = []
    for (let i = n; i > 0; i -= 2) {
        let stars = '*'.repeat(i) + '\n'
        let spaces = ' '.repeat(Math.floor((n - i) / 2))
        if (i === n) {
            res.push(stars)
        } else {
            res.unshift(spaces + stars)
            res.push(spaces + stars)
        }
    }

    return res.join('')
}

const { assert } = require('chai');

describe("diamond()", function () {

    it("Valid diamonds", () => {
        // assert.strictEqual(diamond(1), "*\n")
        // assert.strictEqual(diamond(3), " *\n***\n *\n")
        assert.strictEqual(diamond(5), "  *\n ***\n*****\n ***\n  *\n")
    });

    it("Invalid diamonds", () => {
        assert.strictEqual(diamond(2), null)
        assert.strictEqual(diamond(-3), null)
        assert.strictEqual(diamond(0), null)
    });
});
