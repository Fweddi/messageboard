const getComments = require('./get_comments');

test('retrieves comments from the database', () => {
    getComments(1)
        .then(res => expect(res['comment_id']).toBe(1))
        .catch(err => console.error(err));
});