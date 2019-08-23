const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const escapeHtml = require('escape-html');
const selectUserByName = require('./model/queries/select/select_user_by_name');
const insertUser = require('./model/queries/insert/insert_user');
const checkUsername = require('./utils/check_username');
const checkPassword = require('./utils/check_password');
const bcrypt = require('bcrypt');

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

app.get('/express', (req, res) => {
    console.log(rd);
    res.send({ express: 'Backend is connected' });
});

// app.get('*', (req, res) => {
//     console.log('s');
//     res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
// });

app.post('/api/form-submit', (req, res) => {
    let content = '';
    req.on('data', (data) => {
        content += data;
    });
    req.on('end', () => {
        let data = JSON.parse(content);
        let { username, password } = data;

        const userAlreadyTaken = () => {
            // Here we would send something back to the front end to signify username has been taken.
        }

        const addNewUser = (username, password) => {
            bcrypt.genSalt(10)
                .then(salt => bcrypt.hash(password, salt))
                .then(hash => insertUser(username, hash, Date.now()))
                .catch(err => console.error(err))
        }

        if ((checkUsername(username) && checkPassword(password))) {
            selectUserByName(username)
                .then(result => result ? userAlreadyTaken() : addNewUser(username, password))
                .catch(err => console.error(err))
        };
    });

    res.send('Hi');
});

app.set('PORT', process.env.PORT || 9000);

module.exports = app;