const incorrectLogin = (res) => {
    // Here we would send something back to the front end to signify username has been taken.

    console.error('Incorrect username or password! Try again.')

    res.writeHead(422);
    return res.end();
}

module.exports = incorrectLogin;