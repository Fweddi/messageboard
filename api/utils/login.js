const { sign } = require('jsonwebtoken');

const secret = process.env.SECRET;
require('dotenv').config();

const login = (data, res) => {
    let cookie = sign(`loggedIn=${data.user_id}`, secret);
    res.writeHead(302, {
        "Set-Cookie": `loggedIn=${cookie}; HttpOnly; Max-Age=10000`,
        "Location": "/"
    });
    return res.end();
}

module.exports = login;