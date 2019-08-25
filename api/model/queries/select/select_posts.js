const connection = require('../../database/db_connect');

const selectPosts = () => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT post_title, post_content, post_date, user_name FROM post INNER JOIN user ON post.id = user.id ORDER BY post_date`, (err, res, fields) => {
            if (err) reject(err);
            else resolve(res);
        });
    })
}

module.exports = selectPosts;
