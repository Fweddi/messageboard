const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');
const insertUser = require('../model/queries/insert/insert_user');
const selectUserByName = require('../model/queries/select/select_user_by_name');

const secret = process.env.SECRET;
require('dotenv').config();

const addNewUser = (username, password, res) => {
    bcrypt.genSalt(10)
        .then(salt => bcrypt.hash(password, salt))
        .then(hash => insertUser(username, hash, Date.now()))
        .then(() => selectUserByName(username))
        .then(result => sign(`loggedIn=${result.user_id}`, secret))
        .then(cookie => {
            res.writeHead(302, {
                "Set-Cookie": `loggedIn=${cookie}; HttpOnly; Max-Age=10000`
            });
            return res.end();
        })
        .catch(err => console.error(err));
}

module.exports = addNewUser;