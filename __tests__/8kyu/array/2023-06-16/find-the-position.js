/* When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: */

function position(letter) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    return `Position of alphabet: ${alphabet.indexOf(letter.toLowerCase()) + 1}`
}
const { assert } = require('chai');

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(position("a"), "Position of alphabet: 1");
        assert.strictEqual(position("z"), "Position of alphabet: 26");
        assert.strictEqual(position("e"), "Position of alphabet: 5");
    });
});
