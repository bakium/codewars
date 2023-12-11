/* Task:

Given a two dimensional array, return the co-ordinates of x.

If x is not inside the array, or if x appears multiple times, return [].

The co-ordinates should be zero indexed in row-major order.
You should assume you will always get an array as input. The array will only contain 'x's and 'o's.
Examples

Input: []

Return an empty array if input is an empty array => []

Input: [
  ['o', 'o'],
  ['o', 'o']
]

Return an empty array if no x found => []

Input: [
  ['x', 'o'],
  ['o', 'x']
]

Return an empty array if more than one x found => []

Input: [
  ['x', 'o'],
  ['o', 'o']
]
Return [0,0] when x at top left => [0, 0]

Input: [
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
]
Return [4,6] for the example above => [4, 6]

 */

const { log } = require('console')
const { array } = require('yargs')

const xMarksTheSpot = (input) => {
  if (!input) return []

  let res = []
  let count = 0

  input.forEach((subArr, xIndex) => {

    if (subArr.includes('x')) {
      count++
      res[0] = xIndex
      res[1] = subArr.findIndex(el => el === 'x')
    }
  })

  return count >= 2 ? [] : res
}

const assert = require('chai').assert;

describe('Basic Tests', () => {
  it('Return an empty array if x is an empty array', () => {
    assert.deepEqual(xMarksTheSpot([]), []);
  });
  it('Return an empty array if no x found', () => {
    assert.deepEqual(xMarksTheSpot([['o', 'o'], ['o', 'o']]), []);
  });
  it('Return an empty array if more than one x found', () => {
    assert.deepEqual(xMarksTheSpot([['x', 'o'], ['o', 'x']]), []);
  });
  it('Return [0,0] when x at top left', () => {
    assert.deepEqual(xMarksTheSpot([['x', 'o'], ['o', 'o']]), [0, 0]);
  });
  it('Return [4,6] when x at position [4,6]', () => {
    let input = [
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
    ]
    assert.deepEqual(xMarksTheSpot(input), [4, 6]);
  });
});
