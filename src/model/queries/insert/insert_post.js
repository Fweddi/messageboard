const mysql = require('mysql');
const config = require('../../../../config');

let { DB_URL, TEST_DB_URL } = config;

if (process.env.NODE_ENV === 'test') {
    DB_URL = TEST_DB_URL;
}

let connection = mysql.createConnection(DB_URL);

const insertPost = (post_title, post_content, post_date) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO post (post_title, post_content, post_date) VALUES ('${post_title}', '${post_content}', '${post_date}')`, (err, res, fields) => {
            if (err) reject(err);
            else resolve(res.affectedRows);
        });

        connection.end();
    })
}

module.exports = insertPost;
