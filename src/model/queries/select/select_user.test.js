const selectUser = require('./select_User');

test('selects user from the database', () => {
    selectUser('foo')
        .then(res => expect(res).toHaveProperty('user_name'))
        .catch(err => console.error(err));
});