/* When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: */

function position(letter) {

}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(position("a"), "Position of alphabet: 1");
        assert.strictEqual(position("z"), "Position of alphabet: 26");
        assert.strictEqual(position("e"), "Position of alphabet: 5");
    });
});
