const sanitisePassword = require('./sanitise_password');

test('sanitises password', () => {
    expect(sanitisePassword('Special1!')).toBe('Special1!');
});