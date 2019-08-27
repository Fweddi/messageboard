const userAlreadyTaken = (res) => {
    console.error('User already taken! Try another username.')
    res.writeHead(422);
    return res.end();
}

module.exports = userAlreadyTaken;