/* Description:

Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.
Example 1

a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']

Example 2

a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin']
a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']

returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']

Each element in the arrays will start with a unique letter so there will only be a single match for each element.
 */

function sortArray(a1, a2) {
    return a2.map(a => a[0] === a1.find(el => el[0] === a[0]))
}

const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0

describe("Tests", () => {
    it("test", () => {
        const a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
        const a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];
        assert.deepEqual(sortArray(a1, a2), ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']);

        const a3 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
        const a4 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];
        assert.deepEqual(sortArray(a3, a4), ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']);

        const a5 = ['newt', 'lizard', 'snail', 'tapir', 'rabbit'];
        const a6 = ['tortoise', 'narwhal', 'llama', 'raven', 'sloth'];
        assert.deepEqual(sortArray(a5, a6), ['narwhal', 'llama', 'sloth', 'tortoise', 'raven']);
    });
});
