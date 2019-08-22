const insertPost = require('./insert_post');

test('inserts user in the database', () => {
    insertPost('Hypothesis', 'cogito ergo sum', 1, Date.now())
        .then(res => expect(res).toBe(1))
        .catch(err => console.error(err))
});