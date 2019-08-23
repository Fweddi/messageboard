const connection = require('../../database/db_connect');

const selectComments = (post_id) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM comment WHERE post_id LIKE '${post_id}' ORDER BY comment_date`, (err, res, fields) => {
            if (err) reject(err);
            else resolve(res[0]);
        });
    })
}

module.exports = selectComments;
