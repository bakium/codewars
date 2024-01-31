/* Description:

#Unflatten a list (Easy)

There are several katas like "Flatten a list". These katas are done by so many warriors, that the count of available list to flattin goes down!

So you have to build a method, that creates new arrays, that can be flattened!

#Shorter: You have to unflatten a list/an array.

You get an array of integers and have to unflatten it by these rules:

- You start at the first number.
- If this number x is smaller than 3, take this number x direct 
  for the new array and continue with the next number.
- If this number x is greater than 2, take the next x numbers (inclusive this number) as a 
  sub-array in the new array. Continue with the next number AFTER this taken numbers.
- If there are too few numbers to take by number, take the last available numbers.

The given array will always contain numbers. There will only be numbers > 0.

Example:

 [1,4,5,2,1,2,4,5,2,6,2,3,3] -> [1,[4,5,2,1],2,[4,5,2,6],2,[3,3]]

Steps: 
1. The 1 is added directly to the new array.
2. The next number is 4. So the next 4 numbers (4,5,2,1) are added as sub-array in the new array.
3. The 2 is added directly to the new array.
4. The next number is 4. So the next 4 numbers (4,5,2,6) are added as sub-array in the new array.
5. The 2 is added directly to the new array.
6. The next number is 3. So the next 3 numbers would be taken. There are only 2, 
   so take these (3,3) as sub-array in the new array.

There is a harder version of this kata!
<a href="https://www.codewars.com/kata/57e5aa1d7fbcc988800001ae"taget=_blank>Unflatten a list (Harder than easy)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
Mathematics
Arrays
Algorithms
Similar Kata: */

function unflatten(flatArray) {
  const result = []

  while (flatArray.length) {
    const toPush = flatArray[0] > 2
      ? flatArray.splice(0, flatArray[0])
      : flatArray.shift()

    result.push(toPush)
  }

  return result
}

const { assert } = require('chai')

describe("Kata Tests", function () {
  it("Basic Tests", function () {
    let input = [3, 5, 2, 1];
    let expected = [[3, 5, 2], 1];

    assert.deepEqual(unflatten(input), expected);

    input = [1, 4, 5, 2, 1, 2, 4, 5, 2, 6, 2, 3, 3];
    expected = [1, [4, 5, 2, 1], 2, [4, 5, 2, 6], 2, [3, 3]];

    assert.deepEqual(unflatten(input), expected);
  })
})
