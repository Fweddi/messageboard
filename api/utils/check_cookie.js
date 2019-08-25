const nodeCookie = require('cookie');
const { verify } = require('jsonwebtoken');
const secret = process.env.SECRET;
require('dotenv').config();

const checkCookie = (cookie) => {
    return new Promise((resolve, reject) => {
        if (!cookie) resolve(null);
        let parsedCookie = nodeCookie.parse(cookie);
        verify(parsedCookie.loggedIn, secret, (err, jwt) => {
            if (err) reject(err);
            if (jwt) resolve(nodeCookie.parse(jwt).loggedIn);
            else resolve(null);
        })
    })
}

module.exports = checkCookie;