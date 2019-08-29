const { connection } = require('../../database/db_connect');

const insertUser = (user_name, user_pass, user_date) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO user (user_name, user_pass, user_date) VALUES ('${user_name}', '${user_pass}', '${user_date}')`, (err, res, fields) => {
            if (err) reject(err);
            else resolve(res.affectedRows);
        });
    })
}

module.exports = insertUser;