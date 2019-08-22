const mysql = require('mysql');
const config = require('../../../config');

let { DB_URL, TEST_DB_URL } = config;

if (process.env.NODE_ENV === 'test') {
    DB_URL = TEST_DB_URL;
}

let connection = mysql.createConnection(DB_URL);

const getPosts = () => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM post ORDER BY post_date`, (err, res, fields) => {
            if (err) reject(err);
            else resolve(res[0]);
        });

        connection.end();
    })
}

module.exports = getPosts;
