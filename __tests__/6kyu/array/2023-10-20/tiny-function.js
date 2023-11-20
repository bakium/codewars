/* Our universe is so huge, possibly even infinite and it makes us feel so tiny, isn't that so?
Task

Write a tiny function f that outputs 'tiny' without using the letters t, i, n, y anywhere in your code
Code Limit

Your code is limited to less than 34 characters

Buffer and unicode escapes \ are banned to avoid cheesy solutions :)
 */


f=(x=1/0+"")=>x[6]+x[3]+x[4]+x[7]

// too long !
// String.fromCharCode(116,105,110,121)

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", function () {
    it("It should work for basic tests", function () {
        assert.equal(f(), 'tiny');
    });
});
