const selectPostAuthor = require('./select_post_author');

test('selects post author from the database', () => {
    selectPostAuthor(1)
        .then(res => expect(res).toBe('foo'))
        .catch(err => console.error(err));
});