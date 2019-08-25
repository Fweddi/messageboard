const connection = require('../../database/db_connect');

const selectComments = (post_id) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT comment_content, post_id, comment_date, user_name FROM comment INNER JOIN user ON comment.id = user.id ORDER BY comment_date`, (err, res, fields) => {
            if (err) reject(err);
            else resolve(res[0]);
        });
    })
}

module.exports = selectComments;
