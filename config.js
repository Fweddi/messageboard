require('dotenv').config();

if (!process.env.DB_URL) {
    console.error(`No DB_URL set in .env - please ask Freddie for the secret goods!`)
}

if (!process.env.TEST_DB_URL) {
    console.error(`No TEST_DB_URL set in .env - please set up a local test database!`)
}

module.exports = {
    DB_URL: process.env.DB_URL,
    TEST_DB_URL: process.env.TEST_DB_URL
};  