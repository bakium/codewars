/* Description:

Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.
Worked Example

["right", "right", "right", "right", "left", "right"] ➞ 1
# You spun right 4 times (90 * 4 = 360)
# You spun left once (360 - 90 = 270)
# But you spun right once more to make a full rotation (270 + 90 = 360)

Examples

["left", "right", "left", "right"] ➞ 0

["right", "right", "right", "right", "right", "right", "right", "right"] ➞ 2

["left", "left", "left", "left"] ➞ 1

Notes

    Return a positive number.
    All tests will only include the words "right" and "left".

 */

function spinAround(turns) {
    // Here be dragons!
    return 0;
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Example tests", function () {
    it("Basic tests", function () {
        assert.strictEqual(spinAround(['left', 'right', 'left', 'right']), 0);
        assert.strictEqual(spinAround(['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right']), 2);
        assert.strictEqual(spinAround(['left', 'left', 'left', 'left']), 1);
        assert.strictEqual(spinAround([]), 0);
        assert.strictEqual(spinAround(['left']), 0);
        assert.strictEqual(spinAround(['right']), 0);
        assert.strictEqual(spinAround(['right', 'right', 'right', 'left', 'right', 'right']), 1);
        assert.strictEqual(spinAround(['left', 'left', 'right', 'left', 'left', 'left', 'left', 'left', 'left', 'right', 'left', 'left', 'right', 'right', 'right', 'right', 'left', 'left', 'right', 'right']), 1);
        assert.strictEqual(spinAround(['right', 'left', 'left', 'right', 'left', 'left', 'right', 'left', 'right', 'right', 'left', 'left', 'right', 'right', 'right', 'left', 'left', 'right']), 0);
        assert.strictEqual(spinAround(['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right']), 10);
        assert.strictEqual(spinAround(['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left']), 10);
    });
});
