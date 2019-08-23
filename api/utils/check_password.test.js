const checkPassword = require('./check_password');

test('checks password is the same as in the database', () => {
    checkPassword('Special1!', '$2b$10$hdVr/jqiPcryNOWJc/meP.ioJ437Q.mMjaTbrW/e2qg4zyHnpzA.i')
        .then(res => expect(res).toBe(true))
        .catch(err => console.error(err));
})