/* It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
 */

function getAverage(marks) {
    //TODO : calculate the downward rounded average of the marks array
}

const chai = require('chai')
const assert = chai.assert;
chai.config.truncateThreshold = 0;

it('should make empty test pass', () => { })

describe("Tests", () => {
    it("test", () => {
        assert.deepEqual(getAverage([2, 2, 2, 2]), 2);
        assert.deepEqual(getAverage([1, 2, 3, 4, 5,]), 3);
        assert.deepEqual(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);
    });
});
