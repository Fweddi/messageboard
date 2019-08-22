const mysql = require('mysql');
const config = require('../../../../config');

let { DB_URL, TEST_DB_URL } = config;

if (process.env.NODE_ENV === 'test') {
    DB_URL = TEST_DB_URL;
}

let connection = mysql.createConnection(DB_URL);

const insertComment = (comment_content, user_id, post_id, comment_date) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO comment (comment_content, user_id, post_id, comment_date) VALUES ('${comment_content}', '${user_id}', '${post_id}', '${comment_date}')`, (err, res, fields) => {
            if (err) reject(err);
            else resolve(res.affectedRows);
        });

        connection.end();
    })
}

module.exports = insertComment;
