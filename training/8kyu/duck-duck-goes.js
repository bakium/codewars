/* The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

Example:

duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name

// PHP only
duck_duck_goose([$a, $b, $c, $d], 1); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 5); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 4); // => $d["name"]

 */

function duckDuckGoose(players, goose) {
    // ...
}

const { assert } = require('chai');

class Player {
    constructor(name) {
        this.name = name;
    }
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

describe("fixed tests", function () {
    it("should find the correct goose", function () {
        assert.strictEqual(duckDuckGoose(players, 1), "a");
        assert.strictEqual(duckDuckGoose(players, 3), "c");
        assert.strictEqual(duckDuckGoose(players, 10), "z");
        assert.strictEqual(duckDuckGoose(players, 20), "z");
        assert.strictEqual(duckDuckGoose(players, 30), "z");
        assert.strictEqual(duckDuckGoose(players, 18), "g");
        assert.strictEqual(duckDuckGoose(players, 28), "g");
        assert.strictEqual(duckDuckGoose(players, 12), "b");
        assert.strictEqual(duckDuckGoose(players, 2), "b");
        assert.strictEqual(duckDuckGoose(players, 7), "f");
    });
});
