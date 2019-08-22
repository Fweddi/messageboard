const connection = require('../../database/db_connect');

const selectPosts = () => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM post ORDER BY post_date`, (err, res, fields) => {
            if (err) reject(err);
            else resolve(res[0]);
        });

        connection.end();
    })
}

module.exports = selectPosts;
