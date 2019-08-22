const mysql = require('mysql');
const config = require('../../../../config');

let { DB_URL, TEST_DB_URL } = config;

if (process.env.NODE_ENV === 'test') {
    DB_URL = TEST_DB_URL;
}

let connection = mysql.createConnection(DB_URL);

const getPostAuthor = (user_id) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT user_name FROM user WHERE user_id LIKE '${user_id}'`, (err, res, fields) => {
            if (err) reject(err);
            else resolve(res[0]['user_name']);
        });

        connection.end();
    })
}

module.exports = getPostAuthor;
