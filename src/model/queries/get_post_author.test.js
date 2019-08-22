const getPostAuthor = require('./get_post_author');

test('retrieves post author from the database', () => {
    getPostAuthor(1)
        .then(res => expect(res).toBe('foo'))
        .catch(err => console.error(err));
});