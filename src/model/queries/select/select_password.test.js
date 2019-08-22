const selectPassword = require('./select_password');

test('selects password from the database', () => {
    selectPassword('foo')
        .then(res => expect(res).toBe('password123'))
        .catch(err => console.error(err));
});