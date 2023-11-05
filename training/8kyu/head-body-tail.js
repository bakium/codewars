/* You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

Simples!
 */

function fixTheMeerkat(arr) {
    // longer solution
    // return [...arr.slice(-1), ...arr.slice(1, -1), arr[0]]
    return arr.reverse()

}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.deepEqual(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
        assert.deepEqual(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
        assert.deepEqual(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
        assert.deepEqual(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
        assert.deepEqual(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]);
    })
})

