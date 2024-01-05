/* Description:

Create a function mispelled(word1, word2):

mispelled('versed', 'xersed'); // returns true
mispelled('versed', 'applb'); // returns false
mispelled('versed', 'v5rsed'); // returns true
mispelled('1versed', 'versed'); // returns true
mispelled('versed', 'versed'); // returns true

It checks if the word2 differs from word1 by at most one character.

This can include an extra char at the end or the beginning of either of words.

In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.
 */

const mispelled = function (word1, word2) {

}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("mispelled", () => {
    it("Sample Tests", () => {
        assert.strictEqual(mispelled('versed', 'xersed'), true);
        assert.strictEqual(mispelled('versed', 'applb'), false);

        assert.strictEqual(mispelled('versed', 'v5rsed'), true);
        assert.strictEqual(mispelled('1versed', 'versed'), true);
        assert.strictEqual(mispelled('versed', 'versed1'), true);

        assert.strictEqual(mispelled('versed', 'aversed'), true);
        assert.strictEqual(mispelled('aaversed', 'versed'), false);
        assert.strictEqual(mispelled('versed', 'aaversed'), false);
    });
});
