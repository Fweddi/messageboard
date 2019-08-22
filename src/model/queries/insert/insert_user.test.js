const insertUser = require('./insert_user');

test('inserts user to the database', () => {
    insertUser('glow', 'fire', '2019')
        .then(res => expect(res).toBe(1))
        .catch(err => console.error(err))
});