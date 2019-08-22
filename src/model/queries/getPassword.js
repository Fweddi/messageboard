const mysql = require('mysql');
const config = require('../../../config');

let { DB_URL, TEST_DB_URL } = config;

if (process.env.NODE_ENV === 'test') {
    DB_URL = TEST_DB_URL;
}

let connection = mysql.createConnection(DB_URL);
let user_name = 'foo';

connection.connect();

connection.query(`SELECT user_pass FROM user WHERE user_name LIKE '${user_name}'`, (err, res, fields) => {
    return res[0]['user_pass'];
});

connection.end();