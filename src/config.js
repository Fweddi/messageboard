require('env2')('.env');

if (!process.env.DATABASE_URL) {
    console.error('No database url set in .env - please check readme.md for a link!');
}

if (!process.env.TEST_DATABASE_URL) {
    console.error('No test database url set in .env - please set up a local test database!');
}

if (!process.env.SECRET) {
    console.error('No secret set in .env - please check readme.md for the secret!');
}


module.exports = {
    DATABASE_URL: process.env.DATABASE_URL,
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL,
    SECRET: process.env.SECRET,
};  