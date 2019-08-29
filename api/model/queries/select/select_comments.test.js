const selectComments = require('./select_comments');

test('selects comments from the database', () => {
    selectComments()
        .then(res => Array.isArray(res) ? expect(res[0]['comment.id']).toBe(1) : expect(res['comment.id']).toBe(1))
        .catch(err => console.error(err));
});