/* Sort the given array of strings in alphabetical order, case insensitive. For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

 */

// input: names - unsorted strings
// output: case-agnostic sort
sortme = function (names) {
    return names.sort((a, b) => a.localeCompare(b.toLowerCase()))
}

const { assert } = require("chai")

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.deepEqual(sortme(["Hello", "there", "I'm", "fine"]), ["fine", "Hello", "I'm", "there"])
        assert.deepEqual(sortme(["C", "d", "a", "B"]), ["a", "B", "C", "d"])
        assert.deepEqual(sortme(["CodeWars"]), ["CodeWars"])
        assert.deepEqual(sortme([]), [])
    })
})
