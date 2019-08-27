const incorrectLogin = (res) => {
    console.error('Incorrect username or password! Try again.')
    res.writeHead(422);
    return res.end();
}

module.exports = incorrectLogin;