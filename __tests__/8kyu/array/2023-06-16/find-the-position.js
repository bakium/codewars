/* When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: */

function position(letter) {
    return `Position of alphabet: ${letter.toLowerCase().charCodeAt(0) - 96}`
}
const { assert } = require('chai');

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(position("a"), "Position of alphabet: 1");
        assert.strictEqual(position("z"), "Position of alphabet: 26");
        assert.strictEqual(position("e"), "Position of alphabet: 5");
    });
});
