const postPost = require('./post_post');

test('posts user to the database', () => {
    postPost('Hypothesis', 'cogito ergo sum', '1637')
        .then(res => expect(res).toBe(1))
        .catch(err => console.error(err))
});