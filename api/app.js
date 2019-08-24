const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const selectUserByName = require('./model/queries/select/select_user_by_name');

const sanitiseUsername = require('./utils/sanitise_username');
const sanitisePassword = require('./utils/sanitise_password');
const checkPassword = require('./utils/check_password');
const addNewUser = require('./utils/add_new_user');
const userAlreadyTaken = require('./utils/user_already_taken');
const login = require('./utils/login');
const incorrectLogin = require('./utils/incorrect_login');
const checkCookie = require('./utils/check_cookie');

const app = express();

const middleware = [
    helmet(),
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json(),
    express.static(path.join(__dirname, '..', 'build'))
];
app.use(middleware);

// app.disable('x-powered -by');



app.post('/api/register-submit', (req, res) => {
    let content = '';
    req.on('data', (data) => {
        content += data;
    });
    req.on('end', () => {
        let data = JSON.parse(content);
        let { username, password } = data;

        if ((sanitiseUsername(username) && sanitisePassword(password))) {
            selectUserByName(username)
                .then(result => result ? userAlreadyTaken(res) : addNewUser(username, password, res))
                .catch(err => console.error(err))
        };
    });
});

app.post('/api/login-submit', (req, res) => {
    let content = '';
    req.on('data', (data) => {
        content += data;
    });
    req.on('end', () => {
        let data = JSON.parse(content);
        let { username, password } = data;

        if ((sanitiseUsername(username) && sanitisePassword(password))) {
            selectUserByName(username)
                .then(result => result ? checkPassword(password, result.user_pass)
                    .then(check => check ? login(result, res) : incorrectLogin(res)) : incorrectLogin(res))
                .catch(err => console.error(err))
        };
    });
});




app.get('/api/cookie-check', (req, res) => {
    checkCookie(req.headers.cookie)
        .then(result => {
            result ? res.writeHead(200) : res.writeHead(401);
            res.end();
        })
        .catch(err => console.error(err));
})

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
// });

app.set('PORT', process.env.PORT || 9000);

module.exports = app;