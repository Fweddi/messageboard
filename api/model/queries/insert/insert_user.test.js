const insertUser = require('./insert_user');

test('inserts user to the database', () => {
    insertUser('glow', '$2b$10$hdVr/jqiPcryNOWJc/meP.ioJ437Q.mMjaTbrW/e2qg4zyHnpzA.i', Date.now())
        .then(res => expect(res).toBe(1))
        .catch(err => console.error(err))
});