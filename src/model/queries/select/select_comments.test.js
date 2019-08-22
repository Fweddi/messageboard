const selectComments = require('./select_comments');

test('selects comments from the database', () => {
    selectComments(1)
        .then(res => expect(res['comment_id']).toBe(2))
        .catch(err => console.error(err));
});