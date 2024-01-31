/* Description:

You have a group chat application, but who is online!?

You want to show your users which of their friends are online and available to chat!

Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

The input data has the following structure:

[{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]

The corresponding output should look as follows:

{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}

If for example, no users are online the output should look as follows:

{
  offline: ['Lucy'],
  away: ['Bob']
}

username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).
 */

const whosOnline = (friends) => {

    const res = {}

    // factorisation
    friends.forEach(friend => {
        const userStatus = friend.status === 'online' && friend.lastActivity > 10
            ? 'away'
            : friend.status

        res[userStatus]
            ? res[userStatus].push(friend.username)
            : res[userStatus] = [friend.username]
    })

    // Manual conditions (First iteration)
    // friends.forEach(friend => {
    //     if (friend.status === "offline") {
    //         res.offline ? res.offline.push(friend.username) : res.offline = [friend.username]
    //     }
    //     if (friend.status === "online") {
    //         if (friend.lastActivity <= 10) {
    //             res.online ? res.online.push(friend.username) : res.online = [friend.username]
    //         }
    //         else {
    //             res.away ? res.away.push(friend.username) : res.away = [friend.username]
    //         }
    //     }
    // })

    return res
}

const { assert } = require('chai')


describe('Given examples', function () {
    let friends

    it('Example test one of each', function () {
        friends = [{
            username: 'David',
            status: 'online',
            lastActivity: 10
        }, {
            username: 'Lucy',
            status: 'offline',
            lastActivity: 22
        }, {
            username: 'Bob',
            status: 'online',
            lastActivity: 104
        }]
        assert.deepEqual(whosOnline(friends), {
            online: ['David'],
            offline: ['Lucy'],
            away: ['Bob']
        }, 'Wrong result for example one of each')
    })

    it('Example test no one online', function () {
        friends = [{
            username: 'Lucy',
            status: 'offline',
            lastActivity: 22
        }, {
            username: 'Bob',
            status: 'online',
            lastActivity: 104
        }]
        assert.deepEqual(whosOnline(friends), {
            offline: ['Lucy'],
            away: ['Bob']
        }, 'Wrong result for example no one online')
    })
})
