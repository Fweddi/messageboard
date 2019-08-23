const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const validator = require('validator');
const escapeHtml = require('escape-html');

require('dotenv').config();

const app = express();

const middleware = [
    helmet(),
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json(),
    express.static(path.join(__dirname, '..', 'build'))
];
app.use(middleware);

app.disable('x-powered -by');

//switch package.jsons around..??

app.get('/express', (req, res) => {
    console.log(rd);
    res.send({ express: 'Backend is connected' });
});

// app.get('*', (req, res) => {
//     console.log('s');
//     res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
// });

app.post('/api/form-submit', (req, res, next) => {
    let content = '';
    req.on('data', (data) => {
        // Append data.
        content += data;
    });
    req.on('end', () => {
        // Assuming, we're receiving JSON, parse the string into a JSON object to return.
        let data = JSON.parse(content);
        let { username, password } = data;

        const checkUsername = (username) => {
            if (!validator.isLength(username, 1, 15)) {
                console.log('Username must be between 1 and 15 characters long');
                return false;
            }
            username = validator.trim(username);
            username = validator.escape(username);
            return username;
        }

        const checkPassword = (password) => {
            if (!validator.matches(password, /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$/)) {
                console.error('Password must contain at least one uppercase letter, one lowercase letter, one number and one special character, and be at least eight characters long');
                return false;
            }
            else return password;
        }

        if ((checkUsername(username) && checkPassword(password))) {

        };

        // const errors = validationResult(data);

        // console.log(errors.array());

        // const escapedAnswer = {
        //     q1: escapeHtml(data.answers.q1)
        // }

        // if (!errors.isEmpty()) {
        //     return res.status(422).jsonp(errors.array());
        // } else {
        //     handleLoginForm(data.username, data.password, escapedAnswer)
        //         .then(result => res.send(result))
        //         .catch(err => res.send(err));
        // }
    });
});

app.set('PORT', process.env.PORT || 9000);

module.exports = app;