const { connection } = require('../../database/db_connect');

const selectUserByID = (user_id) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM user WHERE id LIKE '${user_id}'`, (err, res, fields) => {
            if (err) reject(err);
            else resolve(res[0]);
        })
    })
}

module.exports = selectUserByID;
