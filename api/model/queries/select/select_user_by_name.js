const connection = require('../../database/db_connect');

const selectUserByName = (user_name) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM user WHERE user_name LIKE '${user_name}'`, (err, res, fields) => {
            if (err) reject(err);
            else resolve(res[0]);
        });
    })
}

module.exports = selectUserByName;

