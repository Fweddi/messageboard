const mysql = require('mysql');
const fs = require('fs');
const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();
const config = require('../../../config');
const { pool } = require('./db_connect');
let { DB_URL, TEST_DB_URL } = config;

if (process.env.NODE_ENV === 'test') {
    DB_URL = TEST_DB_URL;
}

pool.end();
let connection = mysql.createConnection(DB_URL);
let queries = sql.split(';');
queries.pop();
queries.forEach(query => connection.query(query));
connection.end();