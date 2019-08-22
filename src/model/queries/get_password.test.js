const getPassword = require('./get_password');

test('retrieves password from the database', () => {
    getPassword('foo')
        .then(res => expect(res).toBe('password123'))
        .catch(err => console.error(err));
});