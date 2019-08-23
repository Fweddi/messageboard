const connection = require('../../database/db_connect');

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
