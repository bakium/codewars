/* Description:

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.
*/

function last(x) {
    return x.split(" ").sort((a, b) => a.at(-1).localeCompare(b.at(-1)))
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sort by Last Char", () => {
    it("Testing for fixed tests", () => {
        assert.deepEqual(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
        assert.deepEqual(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']);
        assert.deepEqual(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);
    })
});
