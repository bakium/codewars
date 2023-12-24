/* Description:
Story

YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.
Task

Create a function that takes in a list of button inputs and returns the final state.
Examples

likeOrDislike([Dislike]) => Dislike
likeOrDislike([Like,Like]) => Nothing
likeOrDislike([Dislike,Like]) => Like
likeOrDislike([Like,Dislike,Dislike]) => Nothing

Notes

    If no button is currently active, return Nothing.
    If the list is empty, return Nothing.

 */

// Like, Dislike, Nothing come from Preloaded

const Like = 'Like'
const Dislike = 'Dislike'
const Nothing = 'Nothing'

function likeOrDislike(buttons) {
    return Like || Dislike || Nothing;
}

const { assert } = require("chai");

describe("Likes vs. Dislikes", () => {
    it("description example tests", () => {
        assert.strictEqual(likeOrDislike([Dislike]), Dislike);
        assert.strictEqual(likeOrDislike([Like, Like]), Nothing);
        assert.strictEqual(likeOrDislike([Dislike, Like]), Like);
        assert.strictEqual(likeOrDislike([Like, Dislike, Dislike]), Nothing);
    });
    it("more example tests", () => {
        assert.strictEqual(likeOrDislike([Dislike, Dislike]), Nothing);
        assert.strictEqual(likeOrDislike([Like, Like, Like]), Like);
        assert.strictEqual(likeOrDislike([Like, Dislike]), Dislike);
        assert.strictEqual(likeOrDislike([Dislike, Like, Dislike]), Dislike);
        assert.strictEqual(likeOrDislike([Like, Like, Dislike, Like, Like, Like, Like, Dislike]), Dislike);
        assert.strictEqual(likeOrDislike([]), Nothing);
    });
});
