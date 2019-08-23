const userAlreadyTaken = (res) => {
    // Here we would send something back to the front end to signify username has been taken.

    console.error('User already taken! Try another username.')

    res.writeHead(422);

    return res.end();
}

module.exports = userAlreadyTaken;