/* Our universe is so huge, possibly even infinite and it makes us feel so tiny, isn't that so?
Task

Write a tiny function f that outputs 'tiny' without using the letters t, i, n, y anywhere in your code
Code Limit

Your code is limited to less than 34 characters

Buffer and unicode escapes \ are banned to avoid cheesy solutions :)
 */


f = _ => '' // tiny

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", function () {
    it("It should work for basic tests", function () {
        assert.equal(f(), 'tiny');
    });
});
