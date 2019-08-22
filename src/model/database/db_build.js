const mysql = require('mysql');
const config = require('../../../config');

const fs = require('fs');
const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

let queries = sql.split(';');
queries.pop();

let { DB_URL, TEST_DB_URL } = config;

if (process.env.NODE_ENV === 'test') {
    DB_URL = TEST_DB_URL;
}

let connection = mysql.createConnection(DB_URL);

connection.connect();

queries.forEach(query => connection.query(query));

connection.end();