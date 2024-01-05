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

    // good solution
    return word1.slice(1) === word2
        || word2.slice(1) === word1
        || [...word1].filter((letter, i) => letter !== word2[i]).length <= 1
    // global comparaison (less precise than what the statement tell us to do)
    // if (word1.length >= word2.length) {
    //     return [...word1].filter(letter => !word2.includes(letter)).length <= 1
    // } else {
    //     return [...word2].filter(letter => !word1.includes(letter)).length <= 1
    // }
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
