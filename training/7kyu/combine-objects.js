/* Description:

Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

An example:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }

The combine function should be a good citizen, so should not mutate the input objects.
 */

function combine(...objs) {

    // reduce + forEach
    return objs.reduce((obj, item) => {
        Object.entries(item).forEach(([key, value]) => obj[key] = (obj[key] | 0) + value)
        return obj
    }, {})

    // map + flat + reduce solution
    // const objsEntries = objs.map(o => Object.entries(o)).flat()
    // return objsEntries.reduce((obj, [key, value]) => {
    //     obj[key] = (obj[key] | 0) + value
    //     return obj
    // }, {})
}

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

const { assert } = require('chai');

describe('Combine Objects', () => {
    it('Combine two objects', () => {
        assert.deepEqual(combine(objA, objB), { a: 13, b: 20, c: 36, d: 3 })
        assert.deepEqual(combine(objA, objC), { a: 15, b: 20, c: 30, d: 11, e: 8 })
    })
    it('Combine three objects', () => {
        assert.deepEqual(combine(objA, objB, objC), { a: 18, b: 20, c: 36, d: 14, e: 8 })
        assert.deepEqual(combine(objA, objC, objD), { a: 15, b: 20, c: 33, d: 11, e: 8 })
    })
    it('Handle empty objects', () => {
        assert.deepEqual(combine({}, {}, {}), {})
        assert.deepEqual(combine(objA, objC, {}), { a: 15, b: 20, c: 30, d: 11, e: 8 })
    })
})
