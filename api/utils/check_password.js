const validator = require('validator');

const checkPassword = (password) => {
    if (!validator.matches(password, /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$/)) {
        console.error('Password must contain at least one uppercase letter, one lowercase letter, one number and one special character, and be at least eight characters long');
        return false;
    }
    else return password;
}

module.exports = checkPassword;