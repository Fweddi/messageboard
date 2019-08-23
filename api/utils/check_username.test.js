const checkUsername = require('./check_username');

test('checks username is valid', () => {
    expect(checkUsername(' foo')).toBe('foo');
});