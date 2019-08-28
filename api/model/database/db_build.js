const connection = require('./db_connect');
const fs = require('fs');
const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

let queries = sql.split(';');
queries.pop();

queries.forEach(query => connection.query(query));