const mysql = require('mysql');
const config = require('../../../config');

let { DB_URL, TEST_DB_URL } = config;

if (process.env.NODE_ENV === 'test') {
    DB_URL = TEST_DB_URL;
}

let connection = mysql.createConnection(DB_URL);

const postUser = (user_name, user_pass, user_date) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO user (user_name, user_pass, user_date) VALUES ('${user_name}', '${user_pass}', '${user_date}')`, (err, res, fields) => {
            if (err) reject(err);
            else resolve(res.affectedRows);
        });

        connection.end();
    })
}

module.exports = postUser;