const postUser = require('./post_user');

test('posts user to the database', () => {
    postUser('glow', 'fire', '2019').then(res => expect(res).toBe(1));
});