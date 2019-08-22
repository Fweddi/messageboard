const insertComment = require('./insert_comment');

test('inserts user in the database', () => {
    insertComment('Im in two halves on this one', 1, 1, Date.now())
        .then(res => expect(res).toBe(1))
        .catch(err => console.error(err))
});