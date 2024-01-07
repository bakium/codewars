/* Description:

You've come to visit your grandma and she immediately found you a job - her Christmas tree needs decorating!

She first shows you a tree with a given number of branches, and then hands you some baubles (or loads of them!).

You know your grandma is a very particular person and that she'd like the baubles distributed in an orderly manner. You decide the best course of action would be to put the same number of baubles on each of the branches (if possible) or add one more bauble to some of the branches - starting from the beginning of the tree.

In this kata you will return an array of baubles on each of the branches.

For example:

10 baubles, 2 branches: [5,5] 5 baubles, 7 branches: [1,1,1,1,1,0,0] 12 baubles, 5 branches: [3,3,2,2,2]

The numbers of branches and baubles will always be greater or equal to 0. If there are 0 branches return: "Grandma, we will have to buy a Christmas tree first!".

Good luck - I think your granny may have some minced pies for you if you do a good job!
 */

function baublesOnTree(baubles, branches) {


    // shorter solution
    // here we decrement the divider by one each time
    // and we get the ceill value
    // the abs avoid us to get -0 instead of 0
    return branches
        ? Array.from({ length: branches }, () => Math.abs(Math.ceil(baubles-- / branches)))
        : "Grandma, we will have to buy a Christmas tree first!"

    // first custom solution
    // const repartition = Array.from({ length: branches }, (el, i) => {
    //     return i < (Math.floor(baubles / branches))
    //         ? Math.ceil(baubles / branches)
    //         : Math.floor(baubles / branches)
    // })
    // return branches
    //     ? repartition
    //     : "Grandma, we will have to buy a Christmas tree first!"
}

const { assert } = require('chai')

describe("Here are some test cases", function () {
    it('Test', () => {
        assert.deepEqual(baublesOnTree(5, 5), [1, 1, 1, 1, 1]);
        assert.deepEqual(baublesOnTree(5, 0), "Grandma, we will have to buy a Christmas tree first!");
        assert.deepEqual(baublesOnTree(6, 5), [2, 1, 1, 1, 1]);
        assert.deepEqual(baublesOnTree(50, 9), [6, 6, 6, 6, 6, 5, 5, 5, 5]);
        assert.deepEqual(baublesOnTree(20, 4), [5, 5, 5, 5]);
        assert.deepEqual(baublesOnTree(0, 10), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    })
})
