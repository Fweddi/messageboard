const insertComment = require('./insert_comment');

test('inserts user in the database', () => {
    insertComment('I\'m in two halves on this one', '1637')
        .then(res => expect(res).toBe(1))
        .catch(err => console.error(err))
});