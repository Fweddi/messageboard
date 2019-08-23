const checkPassword = require('./check_password');

test('checks password is valid', () => {
    expect(checkPassword('Special1!')).toBe('Special1!');
});