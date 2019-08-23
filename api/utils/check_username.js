const validator = require('validator');

const checkUsername = (username) => {
    if (!validator.isLength(username, 1, 15)) {
        console.log('Username must be between 1 and 15 characters long');
        return false;
    }
    username = validator.trim(username);
    username = validator.escape(username);
    return username;
}

module.exports = checkUsername;