const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { check, validationResult } = require('express-validator');
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
    console.log(req.url);
    let content = '';
    req.on('data', (data) => {
        // Append data.
        content += data;
    });
    req.on('end', () => {
        // Assuming, we're receiving JSON, parse the string into a JSON object to return.
        var data = JSON.parse(content);
        console.log(data);

        // check('name')
        //     .not()
        //     .isEmpty()
        //     .trim()
        //     .escape()
        //     .withMessage('You should input your name'),
        //     check('email')
        //         .exists()
        //         .isEmail()
        //         .escape()
        //         .withMessage('You should input a email');

        // const errors = validationResult(data);

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