/* Description:

You have a friend who works for a well known animation studio. He has heard you talk about your mad programming skills and ask for your help in writing a function that can search some JSON records and return matching character details.

He needs to be able to search for objects in the collection by any of the objects keys and return an array of all the matches.

The basic structure of the JSON object is shown below:

characters = {"characters": [
    {"name":"Bill Cipher", "age":"Unknown", "speciality":"warp reality"},
    // ......
]};

The JSON object is preloaded and can be accessed using the variable characters.

Your function will also need to accommodate the following:

    Passed value does not match any keys: in this instance return an empty array.
    Passed key does not exist: in this instance return an empty array.
    Passed val should not be case sensitive.

 */

const characters = {
    characters: [
        { name: 'Dipper Pines', age: '12', speciality: 'adventurer' },
        {
            name: 'Mabel Pines',
            age: '12',
            speciality: 'energetic optimist'
        },
        { name: 'Grunkle Stan', age: 'Unknown', speciality: 'shyster' },
        {
            name: 'Soos Ramirez',
            age: '22',
            speciality: ' lovable man-child'
        },
        {
            name: 'Wendy Corduroy',
            age: '15',
            speciality: 'sociable and nonchalant'
        },
        { name: 'Waddles', age: 'Unknown', speciality: 'pig stuff' },
        {
            name: 'Tambry',
            age: '15',
            speciality: 'sociable and nonchalant'
        }
    ]
}

function getCharacters(obj, key, val) {
    return obj.characters.filter((el) => el[key].toLowerCase() === val.toLowerCase())

}

const chai = require("chai")
const assert = chai.assert

describe("Tests", () => {
    it("test", () => {
        assert.deepEqual(getCharacters(characters, 'name', 'Dipper Pines'),
            [{ "name": "Dipper Pines", "age": "12", "speciality": "adventurer" }],
            'Function should be able to match passed criteria.')

        assert.deepEqual(getCharacters(characters, 'name', 'waddles'),
            [{ "name": "Waddles", "age": "Unknown", "speciality": "pig stuff" }],
            'Match should be case insensitive.')

        assert.deepEqual(getCharacters(characters, 'name', 'Wendy'),
            [],
            'Function should match the full passed criteria.')
    });
});
