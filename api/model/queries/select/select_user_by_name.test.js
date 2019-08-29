const selectUserByName = require('./select_user_by_name');

test('selects user from the database', () => {
    selectUserByName('Donna')
        .then(res => expect(res).toHaveProperty('user_name'))
        .catch(err => console.error(err));
});