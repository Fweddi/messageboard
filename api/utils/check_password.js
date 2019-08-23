const bcrypt = require('bcrypt');

const checkPassword = (password, hashedPassword) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hashedPassword, (err, res) => {
            if (err) reject(err);
            resolve(res);
        });
    })
}

module.exports = checkPassword;