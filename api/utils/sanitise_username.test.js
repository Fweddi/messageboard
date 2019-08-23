const sanitiseUsername = require('./sanitise_username');

test('sanitises username is valid', () => {
    expect(sanitiseUsername(' foo')).toBe('foo');
});