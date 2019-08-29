const { connection } = require('../../database/db_connect');

const insertPost = (post_title, post_content, user_id, post_date) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO post (post_title, post_content, user_id, post_date) VALUES ('${post_title}', '${post_content}', '${user_id}', '${post_date}')`, (err, res, fields) => {
            if (err) reject(err);
            else resolve(res.affectedRows);
        });
    })
}

module.exports = insertPost;
