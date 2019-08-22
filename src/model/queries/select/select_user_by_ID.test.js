const selectUserByID = require('./select_user_by_ID');

test('selects user from the database', () => {
    selectUserByID(1)
        .then(res => expect(res).toHaveProperty('user_name'))
        .catch(err => console.error(err));
});